import {ChangeEvent, useState} from "react";

type PropsType = {
    value: string
    onChange: (newTitle: string) => void
}

export const EditableSpan = ({value, onChange}: PropsType) => {
    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState(value)

    const activateEditModeHandler = () => {
        setEditMode(true)
    }

    const deactivatedEditModeHandler = () => {
        setEditMode(false)
        onChange(title)
    }

    const changeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    return (
        <>
            {editMode ? (
                <input
                    value={title}
                    onChange={changeTitleHandler}
                    onBlur={deactivatedEditModeHandler}
                    autoFocus
                />
            ) : (
                <span onDoubleClick={activateEditModeHandler}>{title}</span>
            )}
        </>
    )
}