import axios from 'axios'

const api = axios.create({ baseURL: process.env.REACT_APP_API_URL })

export const findAllPolls = async () => {
  const { data } = await api.get('/')

  return data.body
}

export const findOnePoll = async (uuid: string) => {
  const { data } = await api.get(`/${uuid}`)

  return data.body
};

type SavePoll = (poll: CretaePoll) => Promise<void>;
export const savePoll: SavePoll = async (poll) => {
  const response = await api.post('/', poll)

  console.log(response)
  
};

type SavePollAnswered = (poll: Poll) => Promise<void>;
export const savePollAnswered: SavePollAnswered = async (poll) => {

};
