import * as React from "react";
import { Create, Edit, SimpleForm, TextInput, ImageInput, ImageField, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const ProductCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
        <TextInput label="Name" source="name" />
            <TextInput label="price" source="price" />
            <TextInput label="Ingredients" source="ingredients" />
            <ImageInput source="imageUpload" label="Upload image" accept="image/*">
    <ImageField source="src" title="title" />
</ImageInput>
        </SimpleForm>
    </Create>
);

export const ProductEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
        <TextInput label="Name" source="name" />
            <TextInput label="price" source="price" />
            <TextInput label="Ingredients" source="ingredients" />
            <ImageInput source="imageUpload" label="Upload image" accept="image/*">
    <ImageField source="src" title="title" />
</ImageInput>
        </SimpleForm>
    </Edit>
);
