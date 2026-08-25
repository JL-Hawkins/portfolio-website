import { useEffect, useRef, useState } from "react";
import "./projectModal.css";
import type { Project } from "../data/projects";

/* ==========================================================
   Component Props
   ========================================================== */

type ProjectModalProps = {
    project: Project;
    onClose: () => void;
};

function ProjectModal({
    project,
    onClose,
}: ProjectModalProps) {
    /* ==========================================================
       Component State
       ========================================================== */

    const [selectedImage, setSelectedImage] = useState(0);
    const [isImageZoomed, setIsImageZoomed] = useState(false);

    /* ==========================================================
       Component References
       ========================================================== */

    const modalRef = useRef<HTMLDivElement>(null);

    /* ==========================================================
       Side Effects
       ========================================================== */

    /* ---------- Background Scroll Lock ---------- */

    useEffect(() => {
        const previousOverflow =
            document.body.style.overflow;

        const previousPaddingRight =
            document.body.style.paddingRight;

        const scrollbarWidth =
            window.innerWidth -
            document.documentElement.clientWidth;

        document.body.style.overflow = "hidden";

        /*
          Prevents the page from shifting horizontally when
          the browser scrollbar disappears.
        */
        if (scrollbarWidth > 0) {
            document.body.style.paddingRight =
                `${scrollbarWidth}px`;
        }

        return () => {
            document.body.style.overflow =
                previousOverflow;

            document.body.style.paddingRight =
                previousPaddingRight;
        };
    }, []);

    /* ---------- Focus Trap ---------- */

    useEffect(() => {
        const modal = modalRef.current;

        if (!modal) {
            return;
        }

        const focusableElements =
            modal.querySelectorAll<HTMLElement>(
                [
                    "button:not([disabled])",
                    "a[href]",
                    "input:not([disabled])",
                    "select:not([disabled])",
                    "textarea:not([disabled])",
                    '[tabindex]:not([tabindex="-1"])',
                ].join(",")
            );

        const firstElement = focusableElements[0];

        const lastElement =
            focusableElements[
                focusableElements.length - 1
            ];

        firstElement?.focus();

        function handleTabKey(event: KeyboardEvent) {
            if (event.key !== "Tab") {
                return;
            }

            if (focusableElements.length === 0) {
                event.preventDefault();
                return;
            }

            if (
                event.shiftKey &&
                document.activeElement === firstElement
            ) {
                event.preventDefault();
                lastElement.focus();
            } else if (
                !event.shiftKey &&
                document.activeElement === lastElement
            ) {
                event.preventDefault();
                firstElement.focus();
            }
        }

        window.addEventListener(
            "keydown",
            handleTabKey
        );

        return () => {
            window.removeEventListener(
                "keydown",
                handleTabKey
            );
        };
    }, [project]);

    /* ---------- Keyboard Controls ---------- */

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                if (isImageZoomed) {
                    setIsImageZoomed(false);
                } else {
                    onClose();
                }

                return;
            }

            if (
                !project.images ||
                project.images.length === 0
            ) {
                return;
            }

            if (event.key === "ArrowLeft") {
                setSelectedImage((currentImage) =>
                    currentImage === 0
                        ? project.images!.length - 1
                        : currentImage - 1
                );
            }

            if (event.key === "ArrowRight") {
                setSelectedImage(
                    (currentImage) =>
                        (currentImage + 1) %
                        project.images!.length
                );
            }
        }

        window.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [onClose, project, isImageZoomed]);

    /* ---------- Gallery Reset ---------- */

    useEffect(() => {
        setSelectedImage(0);
        setIsImageZoomed(false);
    }, [project]);

    /* ==========================================================
       Rendered Interface
       ========================================================== */

    return (
        <div
            className="project-modal-overlay"
            onClick={onClose}
        >
            <div
                ref={modalRef}
                className="project-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
                onClick={(event) =>
                    event.stopPropagation()
                }
            >
                {/* ---------- Modal Header ---------- */}

                <div className="project-modal-header">
                    <div className="project-modal-title-group">
                        <h2
                            id="project-modal-title"
                            className="project-modal-title"
                        >
                            {project.title}
                        </h2>

                        <p className="project-modal-organization">
                            {project.organization}
                        </p>

                        <p className="project-modal-subtitle">
                            {project.subtitle}
                        </p>
                    </div>

                    <button
                        type="button"
                        className="project-modal-close"
                        onClick={onClose}
                        aria-label="Close project details"
                    >
                        ✕
                    </button>
                </div>

                {/* ---------- Hero Image ---------- */}

                {project.images &&
                    project.images.length > 0 &&
                    project.heroImageIndex !== undefined &&
                    project.images[project.heroImageIndex] && (
                        <div className="project-modal-hero">
                            <img
                                src={
                                    project.images[
                                        project.heroImageIndex
                                    ].src
                                }
                                alt={
                                    project.images[
                                        project.heroImageIndex
                                    ].caption
                                }
                                className="project-modal-hero-image"
                            />
                        </div>
                    )}

                {/* ---------- Overview ---------- */}

                <section className="project-modal-section">

                    <p className="project-modal-overview">
                        {project.overview}
                    </p>
                </section>

                {/* ---------- Skills & Tools ---------- */}

                <section className="project-modal-section">
                    <h3 className="project-modal-section-title">
                        Skills &amp; Tools
                    </h3>

                    <div className="project-modal-skills">
                        {project.skills.map((skill) => (
                            <span
                                key={skill}
                                className="project-modal-skill"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>

                {/* ---------- Gallery ---------- */}

                {project.images &&
                    project.images.length > 0 && (
                        <section className="project-modal-section project-modal-gallery">
                            <h3 className="project-modal-section-title">
                                Gallery
                            </h3>

                            <button
                                type="button"
                                className="project-modal-image-button"
                                onClick={() =>
                                    setIsImageZoomed(true)
                                }
                                aria-label="Enlarge project image"
                            >
                                <img
                                    src={
                                        project.images[
                                            selectedImage
                                        ].src
                                    }
                                    alt={
                                        project.images[
                                            selectedImage
                                        ].caption
                                    }
                                    className="project-modal-image"
                                />
                            </button>

                            <p className="project-modal-caption">
                                {
                                    project.images[
                                        selectedImage
                                    ].caption
                                }
                            </p>

                            <div className="project-modal-thumbnails">
                                {project.images.map(
                                    (image, index) => (
                                        <button
                                            key={image.src}
                                            type="button"
                                            className="project-modal-thumbnail-button"
                                            onClick={() =>
                                                setSelectedImage(
                                                    index
                                                )
                                            }
                                            aria-label={`Show image ${
                                                index + 1
                                            }`}
                                            aria-pressed={
                                                selectedImage ===
                                                index
                                            }
                                        >
                                            <img
                                                src={image.src}
                                                alt=""
                                                className={
                                                    selectedImage ===
                                                    index
                                                        ? "project-modal-thumbnail project-modal-thumbnail-active"
                                                        : "project-modal-thumbnail"
                                                }
                                            />
                                        </button>
                                    )
                                )}
                            </div>
                        </section>
                    )}

                {/* ---------- Resources ---------- */}

                {project.resources &&
                    project.resources.length > 0 && (
                        <section
                            className="project-modal-section project-modal-resources"
                            aria-labelledby="project-resources-heading"
                        >
                            <h3
                                id="project-resources-heading"
                                className="project-modal-section-title"
                            >
                                Resources
                            </h3>

                            <ul className="project-resource-list">
                                {project.resources.map(
                                    (resource) => (
                                        <li
                                            key={`${resource.type}-${resource.url}`}
                                        >
                                            <a
                                                className="project-resource-link"
                                                href={resource.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span>
                                                    {
                                                        resource.label
                                                    }
                                                </span>

                                                <span aria-hidden="true">
                                                    ↗
                                                </span>

                                                <span className="visually-hidden">
                                                    Opens in a new
                                                    tab
                                                </span>
                                            </a>
                                        </li>
                                    )
                                )}
                            </ul>
                        </section>
                    )}
            </div>

            {/* ---------- Enlarged Image Lightbox ---------- */}

            {isImageZoomed &&
                project.images &&
                project.images.length > 0 && (
                    <div
                        className="project-image-lightbox"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Enlarged project image"
                        onClick={(event) => {
                            event.stopPropagation();
                            setIsImageZoomed(false);
                        }}
                    >
                        <button
                            type="button"
                            className="project-image-lightbox-close"
                            onClick={(event) => {
                                event.stopPropagation();
                                setIsImageZoomed(false);
                            }}
                            aria-label="Close enlarged image"
                        >
                            ✕
                        </button>

                        <img
                            src={
                                project.images[
                                    selectedImage
                                ].src
                            }
                            alt={
                                project.images[
                                    selectedImage
                                ].caption
                            }
                            className="project-image-lightbox-image"
                            onClick={(event) =>
                                event.stopPropagation()
                            }
                        />
                    </div>
                )}
        </div>
    );
}

export default ProjectModal;