import * as React from "react";
import {cloneElement} from 'react';
import {
    Create,
    Edit,
    SimpleForm,
    TextInput,
    SelectInput,
    TextField,
    Datagrid,
    DateField,
    List,
    EditButton,
    useShowController,
    SimpleShowLayout,
    ReferenceManyField
} from 'react-admin';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

const status = [
    {
        value: 1,
        status_text: 'Recieved'
    }, {
        value: 2,
        status_text: 'Preparing'
    }, {
        value: 3,
        status_text: 'Completed'
    }
];
export const OrderCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput label="formConfig" source="formConfig"/>
            <TextInput label="created_at" source="created_at"/>
            <TextInput label="updated_at" source="updated_at"/>
            <SelectInput
                source="order"
                choices={status}
                optionText="status_text"
                optionValue="value"/>
        </SimpleForm>
    </Create>
);

export const OrderEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput label="formConfig" source="formConfig"/>
            <TextInput label="created_at" source="created_at"/>
            <TextInput label="updated_at" source="updated_at"/>
            <SelectInput
                source="order"
                choices={status}
                optionText="status_text"
                optionValue="value"/>
        </SimpleForm>
    </Edit>
);

const MyShow = props => {
    const {
        basePath, // deduced from the location, useful for action buttons
        defaultTitle, // the translated title based on the resource, e.g. 'Post #123'
        loaded, // boolean that is false until the record is available
        loading, // boolean that is true on mount, and false once the record was fetched
        record, // record fetched via dataProvider.getOne() based on the id from the location
        resource, // the resource name, deduced from the location. e.g. 'posts'
        version, // integer used by the refresh feature
    } = useShowController(props);
    console.log(props);
    return (

        <div>
            <Card>
                <CardHeader title={defaultTitle}/>
                <CardContent>{resource}</CardContent>
                {/* <Card>
                    <CardHeader title={defaultTitle}/>
                    <CardContent>{resource}</CardContent>
                    {orderCard}
                </Card> */}
            </Card>
            {cloneElement(props.children, {basePath, record, resource, version})}
        </div>
    );
}

const orderCard = ({record}) => (
    <div>
        {JSON.parse(record.formConfig)
            .map(item => (
                <Card>{item.id}</Card>
            ))}
    </div>
);

export const OrderShow = props => (
    <MyShow {...props}>
        <SimpleShowLayout>
            ...
        </SimpleShowLayout>
    </MyShow>
)

// export const OrderShow = (props) => (     <List {...props}>         {/*
// <Datagrid>             <TextField source="id" />             <BooleanField
// source="commentable" />         </Datagrid> */} <Datagrid>
//      <TextField source="body" />          <DateField source="created_at" />
// <EditButton />                     </Datagrid>     </List> );