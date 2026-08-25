import type { ReactNode } from "react";

const baseUrl = import.meta.env.BASE_URL;

/* ==========================================================
   Project Section Component
   ========================================================== */

type ProjectSectionProps = {
  title: string;
  children: ReactNode;
};

function ProjectSection({
  title,
  children,
}: ProjectSectionProps) {
  return (
    <div className="project-section">
      <h3 className="project-section-title">{title}</h3>

      <div className="project-section-text">
        {children}
      </div>
    </div>
  );
}

/* ==========================================================
   Project Images
   ========================================================== */

/* ---------- Capstone ---------- */

import footshellRender from "../assets/projects/capstone/Capstone footshell render.png";
import footshellFDM from "../assets/projects/capstone/Capstone footshell - FDM.png";
import footshellMJF from "../assets/projects/capstone/Capstone footshell - MJF.png";
import footshellTesting from "../assets/projects/capstone/Capstone footshell - testing.png";

/* ---------- Lemon Muddler ---------- */

import muddlerOriginal from "../assets/projects/muddler/Lemon Muddler Prototype.png";
import muddlerTop from "../assets/projects/muddler/Lemon Juicer - top.jpg";
import muddlerSide from "../assets/projects/muddler/Lemon Juicer - side.jpg";
import muddlerBack from "../assets/projects/muddler/Lemon Juicer - back.jpg";

/* ---------- Bicycle Optimization ---------- */

import bikeReal from "../assets/projects/bikeOptimize/Bike CAD vs Real.png";
import bikeCriticalLoad from "../assets/projects/bikeOptimize/Critical Load Analysis.png";
import bikeFrameFBD from "../assets/projects/bikeOptimize/FBD Frame.jpg";
import bikeForkFBD from "../assets/projects/bikeOptimize/Fork Blade FBD.png";
import bikeMohrs from "../assets/projects/bikeOptimize/Mohrs circle.png";
import bikeFlyer from "../assets/projects/bikeOptimize/bike-flyer.png";
import bikeFEA from "../assets/projects/bikeOptimize/new-design-fea.png";

/* ---------- SPUD ---------- */

import spudInitial from "../assets/projects/SPUD/jennifer initial concept MG.png";
import spudCAD from "../assets/projects/SPUD/SPUD CAD.png";
import spudCADISO from "../assets/projects/SPUD/SPUD CAD ISO.png";
import spudInfo from "../assets/projects/SPUD/SPUD-info-pic.png";
import spudPhoto from "../assets/projects/SPUD/spud photo.png";
import spudTesting from "../assets/projects/SPUD/SPUD TESTING.png";

/* ---------- Water Meter CAD Package ---------- */

import waterMeter00 from "../assets/projects/waterMeter/CAD iso WM.png";
import waterMeter01 from "../assets/projects/waterMeter/water-meter-01.png";
import waterMeter02 from "../assets/projects/waterMeter/water-meter-02.png";
import waterMeter03 from "../assets/projects/waterMeter/water-meter-03.png";
import waterMeter04 from "../assets/projects/waterMeter/water-meter-04.png";
import waterMeter05 from "../assets/projects/waterMeter/water-meter-05.png";
import waterMeter06 from "../assets/projects/waterMeter/water-meter-06.png";
import waterMeter07 from "../assets/projects/waterMeter/water-meter-07.png";
import waterMeter08 from "../assets/projects/waterMeter/water-meter-08.png";
import waterMeter09 from "../assets/projects/waterMeter/water-meter-09.png";
import waterMeter10 from "../assets/projects/waterMeter/water-meter-10.png";
import waterMeter11 from "../assets/projects/waterMeter/water-meter-11.png";
import waterMeter12 from "../assets/projects/waterMeter/water-meter-12.png";

/* ---------- Wearable Alert Device CAD Package ---------- */

import wearableAlert00 from "../assets/projects/wearableDevice/wearable-alert-00.png";
import wearableAlert01 from "../assets/projects/wearableDevice/wearable-alert-01.png";
import wearableAlert02 from "../assets/projects/wearableDevice/wearable-alert-02.png";
import wearableAlert03 from "../assets/projects/wearableDevice/wearable-alert-03.png";
import wearableAlert04 from "../assets/projects/wearableDevice/wearable-alert-04.png";
import wearableAlert05 from "../assets/projects/wearableDevice/wearable-alert-05.png";
import wearableAlert06 from "../assets/projects/wearableDevice/wearable-alert-06.png";
import wearableAlert07 from "../assets/projects/wearableDevice/wearable-alert-07.png";
import wearableAlert08 from "../assets/projects/wearableDevice/wearable-alert-08.png";
import wearableAlert09 from "../assets/projects/wearableDevice/wearable-alert-09.png";
import wearableAlert10 from "../assets/projects/wearableDevice/wearable-alert-10.png";
import wearableAlert11 from "../assets/projects/wearableDevice/wearable-alert-11.png";
import wearableAlert12 from "../assets/projects/wearableDevice/wearable-alert-12.png";

/* ==========================================================
   Project Types
   ========================================================== */

export type ProjectResource = {
  label: string;
  url: string;
  type:
  | "github"
  | "report"
  | "presentation"
  | "video"
  | "website"
  | "other";
};

export type Project = {
  title: string;
  subtitle: string;
  category: "engineering" | "cad";

  overview: ReactNode;
  organization: string;
  skills: string[];

  heroImageIndex?: number;

  images?: {
    src: string;
    caption: string;
  }[];

  resources?: ProjectResource[];
};

/* ==========================================================
   Featured Engineering Projects
   ========================================================== */

export const featuredProjects: Project[] = [
  /* ---------- Capstone ---------- */

  {
    title: "Multi-Part Prosthetic Footshell",
    subtitle: "Product Design & Manufacturing",
    category: "engineering",

    organization:
      "Boise State University Senior Capstone Project",

    heroImageIndex: 3,

    overview: (
      <>
        <ProjectSection title="Challenge and Design">
          <p>
            This project was my year-long senior capstone at Boise
            State University and my first in depth project involving 3D-printed design.
            I worked on a team with four other students to design a 3D printed, accessible and user friendly prosthetic
            footshell which is worn over a prosthetic foot (keel). This was sponsored by COYOTE Prosthetics a company located in Boise, Idaho.
          </p>

          <p>Our main goal was to improve user accessibility, reduce waterlogging during daily and leisure activies, 
            and to provide safer use when walking barefoot. 
            Additionally, we aimed to reduce manufacturing complexity, and lower production
            costs with 3D-printing compared to existing market solutions.
          </p>

          <p>
            The footshell uses a two part 3D-printed design that encompasses the
            prosthetic keel. A rail system allows the two pieces to slide together over
            the keel and then is fastened using a regular philips head screwdriver.
          </p>
        </ProjectSection>

        <ProjectSection title="Role">
          <p>
            I led the iterative CAD development in SolidWorks, refining the design through prototype feedback from a prosthetics
            user while balancing manufacturability, assembly, and compatibility with
            Coyote's prosthetic keel. In addition, I managed manufacturing quotes, project
            costs relative to budget, and contributed extensively to the
            engineering documentation throughout the project.
          </p>
        </ProjectSection>

        <ProjectSection title="Outcome">
          <p>
            My team and I produced a modular prototype that demonstrated improved assembly,
            easier maintenance, met safety needs, and drained effectively when exposed to water. Future
            iterations would improve upon rail functionality and incorporating desugb features such as lattice structure
            within the solid portions of the shell to reduce weight while maintaining or
            improving structural performance. We would also explore incorporating scanned imaging for accurate foot
            geometry and to provide in-depth personalization for users.
          </p>
        </ProjectSection>
      </>
    ),

    skills: [
      "Mechanical Design",
      "CAD - SolidWorks",
      "Fusion Deposition Modeling (FDM) 3D Printing",
      "Multi-Jet Fusion (MJF) 3D Printing",
      "Prototyping",
      "Client Testing",
      "Technical Documentation",
    ],

    images: [
      {
        src: footshellRender,
        caption:
          "CAD render of the multi-part prosthetic footshell.",
      },
      {
        src: footshellFDM,
        caption:
          "Footshell prototype manufactured using FDM 3D printing.",
      },
      {
        src: footshellMJF,
        caption:
          "Footshell prototype manufactured using MJF 3D printing.",
      },
      {
        src: footshellTesting,
        caption:
          "Prototype client testing and evaluation on a soapy, slightly inclined surface to simulate a bath tub.",
      },
    ],

    resources: [
      {
        label: "Project Poster (PDF)",
        url: `${baseUrl}projectResources/footshell/footshell-showcase-poster.pdf`,
        type: "presentation",
      },
      {
        label: "Project Report (PDF)",
        url: `${baseUrl}projectResources/footshell/coyote-me489-final-design-report.pdf`,
        type: "report",
      },
    ],
  },

  /* ---------- Lemon Muddler ---------- */

  {
    title: "Lemon Muddler",
    subtitle: "Product Design & Manufacturing",
    category: "engineering",

    organization:
      "Personal Project",

    heroImageIndex: 1,

    overview: (
      <>
        <ProjectSection title="Challenge and Design">
          <p>
            This project began as a class project and competition aimed at designing a lemon
            muddler that could efficiently extract the most lemon juice, keeping the entire rind and juice
            contained in the cup, while also reducing the risk of user hand injury.
          </p>

          <p>
            A facility member who runs a local lemonade business, Georgie Bea's Lemonade, was a judge for the competition and
            commissioned further development for a food-safe version after my team won. 
            Both myself and one other team member opted to take on the challenge as a personal project, which we worked on outside of the classroom.
            We redesigned the device to improve functionality, and to incorporate food grade materials such as stainless steel for use at the
            client's lemonade stand.
          </p>

          <p>
            The device uses lever arms to raise and lower a shark-toothed
            puck. The user places a cup containing cut lemons under the puck,
            which is then raised and lowered to muddle the lemons.
          </p>
        </ProjectSection>

        <ProjectSection title="Role">
          <p>
            I worked with the client to source materials within budget,
            contributed to the CAD design of the handle, and manufactured
            several components. I machined the lever arms using 2- and
            3-axis mills; turned, drilled, and tapped the cross rods; polished
            the finished assembly; and coordinated anodizing of the aluminum
            frame for corrosion resistance and color.
          </p>
        </ProjectSection>

        <ProjectSection title="Outcome">
          <p>
            Through iterative prototyping and testing, my team and I developed a
            functional design that efficiently muddles lemons while providing
            safe user interaction. The finished device is now used by the
            client in their lemonade business.
          </p>
        </ProjectSection>
      </>
    ),

    skills: [
      "Mechanical Design",
      "CAD - SolidWorks",
      "Lathe and Milling",
      "Prototype Testing",
    ],

    images: [
      {
        src: muddlerOriginal,
        caption:
          "Early, non-food-safe prototype that won the initial design competition.",
      },
      {
        src: muddlerTop,
        caption:
          "Top view of the food-safe design.",
      },
      {
        src: muddlerSide,
        caption:
          "Side view of the food-safe design.",
      },
      {
        src: muddlerBack,
        caption:
          "Rear view of the food-safe design.",
      },
    ],
  },

  /* ---------- Bicycle Frame Optimization ---------- */

  {
    title: "Bicycle Frame Optimization",
    subtitle: "Design Optimization",
    category: "engineering",

    organization:
      "Boise State University Solid Mechanics Project",

    heroImageIndex: 0,

    overview: (
      <>
        <ProjectSection title="Challenge and Design">
          <p>
            This three-stage class project focused on applying mechanical design
            and analysis methods to a real bicycle. Stage 1 involved
            measuring and modeling a bicycle in SolidWorks and performing
            initial static, stress, and deformation analysis. Stage 2 expanded
            the project to evaluate static failure of the frame and fork under
            more extreme loading conditions. Stage 3 introduced fatigue
            analysis and a final design optimization, where the goal was to
            reduce the frame weight by at least 10% without significantly
            compromising structural performance.
          </p>
        </ProjectSection>

        <ProjectSection title="Role">
          <p>
            I independently developed the CAD model, with a focus on the
            frame, and performed the engineering analysis throughout the
            project. This included free-body diagrams, stress and deformation
            calculations, static and fatigue failure analysis, finite element
            analysis, and development of a spreadsheet for calculating
            critical-load stresses. I then redesigned the frame by reducing
            material in lower-stress regions and adding cutouts to the top
            and down tubes.
          </p>
        </ProjectSection>

        <ProjectSection title="Outcome">
          <p>
            The redesigned frame reduced its calculated weight from 3.03 lb
            to 2.68 lb, an 11.55% reduction, while maintaining structural
            integrity. FEA showed a modest increase in maximum stress from
            10.9 ksi to 14.0 ksi while remaining well below the material yield
            strength. The redesign also maintained the original
            fatigue critical rider weight, indicating that the weight
            reduction in the frame would not reduce the predicted fatigue-life
            performance.
          </p>
        </ProjectSection>
      </>
    ),

    skills: [
      "Mechanical Analysis",
      "Fatigue Analysis",
      "Microsoft Excel",
      "CAD - SolidWorks",
      "Finite Element Analysis (FEA)",
      "MATLAB",
      "Technical Documentation",
    ],

    images: [
      {
        src: bikeReal,
        caption:
          "Comparison between the bicycle CAD model and physical bicycle.",
      },
      {
        src: bikeFrameFBD,
        caption:
          "Free-body diagram of the bicycle frame.",
      },
      {
        src: bikeForkFBD,
        caption:
          "Free-body diagram of the bicycle fork blade.",
      },
      {
        src: bikeCriticalLoad,
        caption:
          "Critical-load analysis of the bicycle frame for calculated maximum weight.",
      },
      {
        src: bikeMohrs,
        caption:
          "Mohr's Circle illustrating the principal and maximum shear stresses for the tensile critical stress element at the crank arm-chainring interface.",
      },
      {
        src: bikeFEA,
        caption:
          "Finite Element Analysis (FEA) for the redesigned bicycle frame.",
      },
      {
        src: bikeFlyer,
        caption:
          "Project summary flyer.",
      },
    ],

    resources: [
      {
        label: "Project Report - Stage 1 (PDF)",
        url: `${baseUrl}projectResources/bikeOpt/bicycle-project-stage-1.pdf`,
        type: "report",
      },
      {
        label: "Project Report - Stage 2 (PDF)",
        url: `${baseUrl}projectResources/bikeOpt/bicycle-project-stage-2.pdf`,
        type: "report",
      },
      {
        label: "Project Report - Stage 3 (PDF)",
        url: `${baseUrl}projectResources/bikeOpt/bicycle-project-stage-3.pdf`,
        type: "report",
      },
      {
        label: "Critical Analysis Spreadsheet (.xlsx)",
        url: `${baseUrl}projectResources/bikeOpt/statics-analysis.xlsx`,
        type: "other",
      },
    ],
  },

  /* ---------- SPUD ---------- */

  {
    title: "SPUD - Secure Passive Universal Dock",
    subtitle: "Product Design & Manufacturing",
    category: "engineering",

    organization:
      "NASA Micro-g NExT Challenge",

    heroImageIndex: 2,

    overview: (
      <>
        <ProjectSection title="Challenge and Design">
          <p>
            Working as part of the Boise State Microgravity Research Team (extracurricular),
            our team developed SPUD, a passive tool-docking system for NASA's
            2025 Micro-g NExT Challenge. The device was designed to mount to
            an astronaut's belt-mounted swing arm and allow tools to be
            secured with a single action in a microgravity environment. For redudency against accidental 
            tool ejection, it was also required that two actions would be necessary for tool removal.
          </p>

          <p>
            The dock attaches to the swing arm while a rod mount attaches to
            the tool. The rod enters the dock through a funnel created by the
            lever arms and moves into a cavity containing spring-loaded
            L-brackets. The lever-arm profile and L-brackets work together to
            retain the tool. Both lever arms must be squeezed to release the
            tool, preventing accidental ejection if only one arm is pressed. 
            A spring is also attached to the bottom retention plate
            to help provide momentum when the tool is released in microgravity.
          </p>
        </ProjectSection>

        <ProjectSection title="Role">
          <p>
            As a member of the design team, I contributed to the initial
            funnel and tool securement concepts and collaborated on CAD
            development of the main body cavity. I also manufactured the rod
            components of the final design using a lathe, drilling, and
            tapping operations. Additionally, I contributed to design
            documentation submitted to NASA throughout the year, including
            the initial proposal.
          </p>
        </ProjectSection>

        <ProjectSection title="Outcome">
          <p>
            SPUD was selected by NASA for testing at the Neutral Buoyancy
            Laboratory in Houston, where the manufactured device was
            successfully tested underwater in a simulated microgravity
            environment. Though I was not among the team members who attended
            the testing, I contributed to the design and manufacture of the
            device.
          </p>

          <p>
            <a
              className="project-video-link"
              href="https://www.youtube.com/watch?v=unzAX2giKME"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch the prototype demonstration
              <span aria-hidden="true"> ↗</span>
            </a>

            <span className="project-video-credit">
              Video by Noah Young
            </span>
          </p>
        </ProjectSection>
      </>
    ),

    skills: [
      "Mechanical Design",
      "CAD - Fusion 360",
      "Prototyping",
      "Testing",
      "Technical Documentation",
    ],

    images: [
      {
        src: spudInitial,
        caption:
          "An early design concept that I created and presented before my team developed our initial design and proposal to NASA.",
      },
      {
        src: spudCAD,
        caption:
          "CAD model of the final SPUD device.",
      },
      {
        src: spudCADISO,
        caption:
          "Isometric CAD view of the final SPUD device.",
      },
      {
        src: spudInfo,
        caption:
          "SPUD prototype with material breakdown.",
      },
      {
        src: spudPhoto,
        caption:
          "SPUD prototype with NASA caution labels added at potential pinch points.",
      },
      {
        src: spudTesting,
        caption:
          "NASA specialist testing SPUD with a mock pistol-grip tool underwater at the Neutral Buoyancy Laboratory in Houston, Texas.",
      },
    ],
  },
];

/* ==========================================================
   CAD & FEA Projects
   ========================================================== */

export const cadProjects: Project[] = [
  /* ---------- Water Meter ---------- */

  {
    title: "Water Meter Package",
    subtitle: "CAD Modeling & Technical Drawings",
    category: "cad",

    organization:
      "Boise State University Manufacturing and Assembly Project",

    heroImageIndex: 0,

    overview: (
      <>
        <ProjectSection title="Project">
          <p>
            For this project, I developed a complete SolidWorks CAD model and 12-sheet technical
            drawing package for a Badger water meter assembly. The package includes
            assembly views, a bill of materials, individual
            component drawings, section views, and detailed dimensions.
          </p>
        </ProjectSection>

        <ProjectSection title="Work Completed">
          <p>
            I modeled the individual components, created the assembly and
            the corresponding engineering drawings for each component in SolidWorks. The drawing
            package documents the overall assembly, including a exploded view and BOM as well as the
            geometry and dimensions required to define each component. A
            drawing redline review was also completed and incorporated into
            the revised package.
          </p>
        </ProjectSection>
      </>
    ),

    skills: [
      "CAD - SolidWorks",
      "Assembly Modeling",
      "Technical Drawings",
      "Dimensioning",
      "Bill of Materials (BOM)",
    ],

    images: [
      {
        src: waterMeter00,
        caption:
          "Isometric view of water meter.",
      },
      {
        src: waterMeter01,
        caption:
          "Overall water meter assembly drawing.",
      },
      {
        src: waterMeter02,
        caption:
          "Exploded assembly view and bill of materials.",
      },
      {
        src: waterMeter03,
        caption:
          "Lid cap component drawing.",
      },
      {
        src: waterMeter04,
        caption:
          "Meter gauge reference drawing.",
      },
      {
        src: waterMeter05,
        caption:
          "Gauge collar component drawing.",
      },
      {
        src: waterMeter06,
        caption:
          "Hex nut component drawing.",
      },
      {
        src: waterMeter07,
        caption:
          "Screw component drawing.",
      },
      {
        src: waterMeter08,
        caption:
          "Meter housing component drawing.",
      },
      {
        src: waterMeter09,
        caption:
          "Strainer component drawing.",
      },
      {
        src: waterMeter10,
        caption:
          "O-ring component drawing.",
      },
      {
        src: waterMeter11,
        caption:
          "Housing bottom component drawing.",
      },
      {
        src: waterMeter12,
        caption:
          "Housing bottom ring component drawing.",
      },
    ],

    resources: [
      {
        label: "Full CAD Drawing Package (PDF)",
        url: `${baseUrl}projectResources/waterMeter/water-meter-package.pdf`,
        type: "report",
      },
    ],
  },

  /* ---------- Wearable Alert Device ---------- */

  {
    title: "Wearable Alert Device",
    subtitle: "CAD Modeling & Technical Drawings",
    category: "cad",

    organization:
      "Boise State University Manufacturing and Assembly Project",

    heroImageIndex: 0,

    overview: (
      <>
        <ProjectSection title="Project">
          <p>
            In this project, I designed a complete SolidWorks model, assembly and 12-sheet technical
            drawing package for a new wearable alert device. The assembly
            integrates an electronics package, rechargeable battery, USB-C
            charging port, power switch, protective housing, LED cover, and
            interchangeable wearable mounting configurations (wrist, lanyard and belt).
          </p>
        </ProjectSection>

        <ProjectSection title="Work Completed">
          <p>
            I designed and modeled the device housing myself, while using provided supporting and electronic
            components provided from my instructor in SolidWorks to create the overall assembly.
            I then designed and developed the belt, lanyard, and wrist-mounted harness
            configurations and created the corresponding engineering
            drawings. The completed package includes an exploded assembly and
            bill of materials, component drawings, section and detail views,
            and dimensions for the manufactured parts.
          </p>
        </ProjectSection>
      </>
    ),

    skills: [
      "CAD - SolidWorks",
      "Assembly Modeling",
      "Technical Drawings",
      "Design for Assembly",
      "Bill of Materials (BOM)",
    ],

    images: [
      {
        src: wearableAlert00,
        caption:
          "Isometric view of the wearable alert device.",
      },
      {
        src: wearableAlert01,
        caption:
          "Overall wearable alert device assembly drawing.",
      },
      {
        src: wearableAlert02,
        caption:
          "Exploded device assembly and bill of materials.",
      },
      {
        src: wearableAlert03,
        caption:
          "LED cover component drawing.",
      },
      {
        src: wearableAlert04,
        caption:
          "Alert device top housing component drawing.",
      },
      {
        src: wearableAlert05,
        caption:
          "Alert device bottom housing component drawing.",
      },
      {
        src: wearableAlert06,
        caption:
          "Device harness in the belt-mounted configuration.",
      },
      {
        src: wearableAlert07,
        caption:
          "Device harness in the lanyard configuration.",
      },
      {
        src: wearableAlert08,
        caption:
          "Device harness in the wrist-mounted configuration.",
      },
      {
        src: wearableAlert09,
        caption:
          "PCB reference drawing used for assembly packaging.",
      },
      {
        src: wearableAlert10,
        caption:
          "Rechargeable battery reference drawing.",
      },
      {
        src: wearableAlert11,
        caption:
          "USB-C port reference drawing.",
      },
      {
        src: wearableAlert12,
        caption:
          "Power switch reference drawing.",
      },
    ],

    resources: [
      {
        label: "Full CAD Drawing Package (PDF)",
        url: `${baseUrl}projectResources/wearableAlert/wearable-alert-device-package.pdf`,
        type: "report",
      },
    ],
  },
  {
    title: "LEGO Helicopter",
    subtitle: "CAD Modeling & Technical Drawings",
    category: "cad",

    organization:
      "Boise State University Graphical Communications Project",

    heroImageIndex: 0,

    overview: (
      <>
        <ProjectSection title="Project">
          <p>
            For this project I was tasked with reverse engineering a LEGO helicopter set and recreating each part
            and the complete assembly in SolidWorks. The project progressed from defining design
            requirements and developing an initial concept sketch to modeling
            the final assembly, subassemblies, and individual LEGO components.
          </p>
        </ProjectSection>

        <ProjectSection title="Work Completed">
          <p>
            I loaned out a LEGO set, researched or measured dimensions for the pieces, then modeled each component
            and its assembly in SolidWorks. This
            included propeller and cab subassemblies, and utilized configurations
            to represent multiple LEGO part variations. I created an exploded
            assembly with a bill of materials and produced detailed engineering
            drawings documenting the final assembly and individual components.
          </p>
        </ProjectSection>
      </>
    ),

    skills: [
      "CAD - SolidWorks",
      "Reverse Engineering",
      "Assembly Modeling",
      "Technical Drawings",
      "SolidWorks Configurations",
      "Bill of Materials (BOM)",
    ],

    images: [
      {
        src: `${baseUrl}projectResources/legoHelicopter/lego-helicopter-01.png`,
        caption: "LEGO helicopter project cover and completed CAD model.",
      },
      {
        src: `${baseUrl}projectResources/legoHelicopter/lego-helicopter-03.png`,
        caption: "Initial helicopter concept sketch.",
      },
      {
        src: `${baseUrl}projectResources/legoHelicopter/lego-helicopter-07.png`,
        caption: "Exploded final assembly view and bill of materials.",
      },
      {
        src: `${baseUrl}projectResources/legoHelicopter/lego-helicopter-08.png`,
        caption: "Final assembly technical drawing.",
      },
      {
        src: `${baseUrl}projectResources/legoHelicopter/lego-helicopter-09.png`,
        caption: "Exploded propeller subassembly drawing.",
      },
      {
        src: `${baseUrl}projectResources/legoHelicopter/lego-helicopter-10.png`,
        caption: "LEGO component 306924 technical drawing.",
      },
      {
        src: `${baseUrl}projectResources/legoHelicopter/lego-helicopter-11.png`,
        caption: "Configured LEGO brick family technical drawing.",
      },
      {
        src: `${baseUrl}projectResources/legoHelicopter/lego-helicopter-12.png`,
        caption: "LEGO component 368001 technical drawing.",
      },
      {
        src: `${baseUrl}projectResources/legoHelicopter/lego-helicopter-13.png`,
        caption: "LEGO component 4540203 technical drawing.",
      },
      {
        src: `${baseUrl}projectResources/legoHelicopter/lego-helicopter-14.png`,
        caption: "Exploded cab back subassembly drawing.",
      },
      {
        src: `${baseUrl}projectResources/legoHelicopter/lego-helicopter-15.png`,
        caption: "LEGO component 4615649 technical drawing.",
      },
      {
        src: `${baseUrl}projectResources/legoHelicopter/lego-helicopter-16.png`,
        caption: "LEGO component 302321 technical drawing.",
      },
      {
        src: `${baseUrl}projectResources/legoHelicopter/lego-helicopter-17.png`,
        caption: "LEGO component 4211350 technical drawing.",
      },
      {
        src: `${baseUrl}projectResources/legoHelicopter/lego-helicopter-18.png`,
        caption: "Translucent LEGO component configuration drawing.",
      },
      {
        src: `${baseUrl}projectResources/legoHelicopter/lego-helicopter-19.png`,
        caption: "LEGO component 4210636 technical drawing.",
      },
      {
        src: `${baseUrl}projectResources/legoHelicopter/lego-helicopter-20.png`,
        caption: "Translucent LEGO component 4226179 technical drawing.",
      },
      {
        src: `${baseUrl}projectResources/legoHelicopter/lego-helicopter-21.png`,
        caption: "LEGO component 4211504 technical drawing.",
      },
      {
        src: `${baseUrl}projectResources/legoHelicopter/lego-helicopter-22.png`,
        caption: "LEGO component 300521 technical drawing.",
      },
      {
        src: `${baseUrl}projectResources/legoHelicopter/lego-helicopter-23.png`,
        caption: "LEGO component 4515369 technical drawing.",
      },
      {
        src: `${baseUrl}projectResources/legoHelicopter/lego-helicopter-24.png`,
        caption: "LEGO component 4556157 technical drawing.",
      },
      {
        src: `${baseUrl}projectResources/legoHelicopter/lego-helicopter-25.png`,
        caption: "LEGO component 242021 technical drawing.",
      },
      {
        src: `${baseUrl}projectResources/legoHelicopter/lego-helicopter-26.png`,
        caption: "LEGO component 4632575 technical drawing.",
      },
      {
        src: `${baseUrl}projectResources/legoHelicopter/lego-helicopter-27.png`,
        caption: "LEGO component 614126 technical drawing.",
      },
    ],

    resources: [
      {
        label: "Full CAD Drawing Package (PDF)",
        url: `${baseUrl}projectResources/legoHelicopter/lego-helicopter-package.pdf`,
        type: "report",
      },
    ],
  }
];