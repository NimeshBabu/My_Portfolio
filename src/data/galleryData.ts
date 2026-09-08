export interface GalleryItem {
    id: string
    title: string
    description: string
    image: string
    tools: string[]
    aspectRatio: string
}

export const galleryItems: GalleryItem[] = [
    {
        id: "dreaming-poster",
        title: "Surreal Dreaming Poster",
        description: "An artistic poster concept blending dreamy visuals, atmospheric lighting, and expressive color palettes to evoke creative emotion and narrative depth.",
        image: "/Graphic Design/Dreaming.png",
        tools: ["Photoshop", "Illustrator"],
        aspectRatio: "aspect-[4/5]",
    },
    {
        id: "second-post",
        title: "Brand Promotional Art",
        description: "A clean digital artwork poster focusing on balanced composition, modern visual elements, and high-impact visual aesthetics for social engagement.",
        image: "/Graphic Design/Second.png",
        tools: ["Photoshop"],
        aspectRatio: "aspect-[4/5]",
    },
    {
        id: "travel-poster",
        title: "Explore Travel Campaign",
        description: "A vibrant promotional travel poster showcasing majestic landscapes with bold typography and immersive composition designed for tourism marketing.",
        image: "/Graphic Design/Travel.png",
        tools: ["Photoshop"],
        aspectRatio: "aspect-[4/5]",
    },
    {
        id: "third-poster",
        title: "Minimalist Identity Design",
        description: "A refined brand showcase poster highlighting spatial structure, elegant typography choices, and harmonious contrast.",
        image: "/Graphic Design/Third.png",
        tools: ["Illustrator"],
        aspectRatio: "aspect-[3/4]",
    },
    {
        id: "creative-poster",
        title: "Modern Conceptual Poster",
        description: "A contemporary graphic poster exploring abstract forms, sharp contrast, and sleek typography layout for modern exhibition and brand identity.",
        image: "/Graphic Design/poster.png",
        tools: ["Photoshop", "Illustrator"],
        aspectRatio: "aspect-[3/4]",
    },
        {
        id: "coffee-post",
        title: "Aesthetic Coffee Post",
        description: "A minimal and warm Instagram post design created to evoke comfort. Highlights typographic hierarchy and clean vector illustration elements for modern café branding.",
        image: "/Graphic Design/CofeePost.png",
        tools: ["Photoshop", "Illustrator"],
        aspectRatio: "aspect-[1/1]",
    },
    {
        id: "burger-design",
        title: "Burger Advertising Poster",
        description: "A mouth-watering marketing post designed to draw focus to composition, depth, and vibrant colors. The design leverages dynamic lighting and shadow manipulation to make the main product stand out.",
        image: "/Graphic Design/BurgurDesign.png",
        tools: ["Photoshop", "Figma"],
        aspectRatio: "aspect-[4/5]",
    },

    {
        id: "food-design",
        title: "Gourmet Banner Design",
        description: "An elegant promotional banner featuring rich textures, clean layout grids, and visual focus on organic ingredients. Designed with high-contrast color choices suitable for digital menus.",
        image: "/Graphic Design/Food Design.png",
        tools: ["Photoshop"],
        aspectRatio: "aspect-[4/5]",
    },
    {
        id: "flyer-design",
        title: "Corporate Event Flyer",
        description: "A professional and structured print flyer utilizing geometric layout grids. Emphasizes clean information hierarchy, legible typography paths, and functional brand representation.",
        image: "/Graphic Design/Flyer.png",
        tools: ["Illustrator"],
        aspectRatio: "aspect-[1/1.414]",
    },
]
