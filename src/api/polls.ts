import axios from 'axios';

const api = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export const findAllPolls = async ({ page, limit }: { page: number, limit: number }) => {
    const { data } = await api.get(`/?page=${page + 1}&limit=${limit}`);

    return data.body;
};

export const findOnePoll = async (uuid: string) => {
    const { data } = await api.get(`/${uuid}`);

    return data.body;
};

export const createPoll = async (poll: Poll) => {
    const response = await api.post('/', poll);

    return response.data.body;
};

export const updatePoll = async (poll: Poll) => {
    const response = await api.put(`/${poll.uuid}`, poll);

    return response.data.body;
};

type DeletePoll = (uuid: string) => Promise<boolean>;
export const deletePoll: DeletePoll = async (uuid: string) => {
    const response = await api.delete(uuid);

    return response.data.body;
};

type SavePollAnswered = (poll: Poll) => Promise<void>;
export const savePollAnswered: SavePollAnswered = async (/* poll */) => {};
