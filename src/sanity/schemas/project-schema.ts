import { defineField, defineType } from "sanity";

export default defineType({
    name: "project",
    title: "project",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        
        }),
        defineField({ name: 'description', title: 'description', type: 'text' }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            options: { hotspot: true },
        }),
    ],
});
