export type SkillCategory = {
    title: string;
    skills: string[];
};

export const skillCategories: SkillCategory[] = [
    {
        title: "CAD & Design",
        skills: [
            "SolidWorks",
            "Fusion 360",
            "AutoCAD",
        ],
    },
    {
        title: "Manufacturing",
        skills: [
            "3D Printing - Bambu Labs (FDM)",
            "3D Printing - HP (MJF)",
            "2 & 3 Axis Milling",
            "Lathe",
            "MIG/TIG Welding (Limited)",
        ],
    },
    {
        title: "Programming",
        skills: [
            "MATLAB",
            "Java",
        ],
    },
];