import { useState } from "react";
import TextInput from "./Inputs/TextInput";
import SelectInput from "./Inputs/SelectInput"
import TextAreaInput from "./Inputs/TextAreaInput";

const NoteForm = ({ notes, setNotes }) => {
    const [formData, setFormData] = useState({
        title: '',
        category: 'Work',
        priority: 'Medium',
        description: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.title || !formData.description)
            return
        const currentNote = { id: Date.now(), ...formData }
        setNotes([currentNote, ...notes])
        setFormData({
            title: '',
            category: 'Work',
            priority: 'Medium',
            description: ''
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextInput
                label='Title'
                name='title'
                value={formData.title}
                onChange={handleChange}
            />
            <SelectInput
                label='Category'
                name='category'
                value={formData.category}
                onChange={handleChange}
                options={[
                    { label: 'Work', value: 'Work' },
                    { label: 'Personal', value: 'Personal' },
                    { label: 'Ideas', value: 'Ideas' }
                ]}
            />
            <SelectInput
                label='Priority'
                name='priority'
                value={formData.priority}
                onChange={handleChange}
                options={[
                    { label: 'High', value: 'High' },
                    { label: 'Medium', value: 'Medium' },
                    { label: 'Low', value: 'Low' }
                ]}
            />
            <TextAreaInput
                label='Description'
                name='description'
                value={formData.description}
                onChange={handleChange}
            />
            <button className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">Add Note</button>
        </form>
    );
}

export default NoteForm;