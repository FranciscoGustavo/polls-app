type UsePollForm = (props: { poll?: Poll }) => {
    poll: Poll;
    expanded: string | boolean;
    isSaving: boolean;
    isSaved: boolean;
    error: boolean;
    handleChangeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleChange: (
        panel: string
    ) => (event: React.SyntheticEvent | null, isExpanded: boolean) => void;
    handleAddNewQuestion: () => void;
    handleAddNewAnswer: (uuid: string) => () => void;
    handleChangeQuestion: (
        uuid: string
    ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeTypeQuestion: (
        uuid: string
    ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleChangeAnswer: ({
        uuid,
        answerUuid,
    }: {
        uuid: string;
        answerUuid: string;
    }) => (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleDeleteQuestion: (
        uuid: string
    ) => (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleDeleteAnswer: ({
        uuid,
        answerUuid,
    }: {
        uuid: string;
        answerUuid: string;
    }) => (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleSave: () => void;
};
