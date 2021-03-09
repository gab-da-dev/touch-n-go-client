import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
import axios from 'axios'
import Cookies from 'js-cookie';

const apiUrl = `164.90.131.16/api`;
const httpClient = fetchUtils.fetchJson;

export default {
    getList: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: 4,
            // total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    },

    getOne: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json,
        })),

    getMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    },

    update: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json })),

    updateMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    create: async(resource, params) =>{
        if(resource.localeCompare('product')){
            var createMealForm = new FormData();
            createMealForm.append('productName', params.data.name);
            console.log(params);
            createMealForm.append('ingredients', params.data.ingredients);
            createMealForm.append('price', params.data.price);
            // createMealForm.append('imageUpload', params.data.imageUpload.rawFile);
            createMealForm.append('id', Cookies.get('id'));
    
            // return createMealForm
            let res = await axios.post(`${apiUrl}/${resource}`, createMealForm, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            console.log(resource);
        return res;
        }

        if(resource.localeCompare('order')){
            var createMealForm = new FormData();
            createMealForm.append('formConfig', params.data.name);
            createMealForm.append('created_at', params.data.ingredients);
            createMealForm.append('updated_at', params.data.price);
    
            // return createMealForm
            let res = await axios.post(`${apiUrl}/${resource}`, createMealForm, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            console.log(resource);
        return res;
        }
      
    },

        // httpClient(`${apiUrl}/${resource}`, {
        //     method: 'POST',
        //     body: JSON.stringify(params.data),
        // }).then(({ json }) => ({
        //     data: { ...params.data, id: json.id },
        // })),

    delete: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json })),

    deleteMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'DELETE',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    }
};