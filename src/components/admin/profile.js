import * as React from "react";
import { Create, Edit, SimpleForm, TextInput, ImageInput, ImageField, DateInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const ProfileCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
        <TextInput label="Name" source="name" />
            <TextInput label="price" source="price" />
            <TextInput label="Ingredients" source="ingredients" />
                <ImageInput source="imageUpload" label="Upload image" accept="image/*">
        <ImageField source="src" title="title" />
    </ImageInput>
            {/* <DateInput label="Publication date" source="published_at" defaultValue={new Date()} /> */}
        </SimpleForm>
    </Create>
);

export const ProfileEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput disabled label="Id" source="id" />
            <TextInput source="title" />
            <TextInput multiline source="teaser" />
            <RichTextInput source="body" />
            <DateInput label="Publication date" source="published_at" />
            <ReferenceManyField label="Comments" reference="comments" target="post_id">
                <Datagrid>
                    <TextField source="body" />
                    <DateField source="created_at" />
                    <EditButton />
                </Datagrid>
            </ReferenceManyField>
        </SimpleForm>
    </Edit>
);
