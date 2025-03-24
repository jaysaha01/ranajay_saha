import { defineField, defineType } from "sanity";

export default defineType({
    name: "myproject",
    title: "myproject",
    type: "document",
    fields: [
        defineField({
            name: "image",
            title: "Image",
            type: "string",
        }),
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({ name: 'description', title: 'description', type: 'text' }),
        defineField({
            name: "link",
            title: "link",
            type: "string",
        }),
        defineField({
            name: 'skills',
            title: 'skills',
            type: 'array',
            of: [{ type: 'string' }]
        }),

    ],
});
