import client from './config';

const userPath = '/user';

const ClientUsers = {
    async createUser(data) {
        try {
            const response = await client.post(`${userPath}/create`, data);
            return response;
        } catch (e) {
            return e;
        }
    },
    
    async updateUser(data) {
        try {
            const response = await client.put(`${userPath}/update`, data);
            return response;
        } catch (e) {
            return e;
        }
    },

    async deleteUser(data) {
        try {
            const response = await client.delete(`${userPath}/delete/${data.email}`);
            return response;
        } catch (e) {
            return e;
        }
    },

    async getUsers() {
        try {
            const response = await client.get(`${userPath}/list`);
            return response;
        } catch (e) {
            return e;
        }
    },

    async getUserByEmail(data) {
        try {
            const response = await client.patch(`${userPath}/listUser/${data.email}`);
            return response;
        } catch (e) {
            return e;
        }
    },


};

export default ClientUsers;