import { useState } from 'react';
import './index.css';

export default function RegisterForm() {
    const [form, setForm] = useState({
        firstName: 'Usama Hussain',
        lastName: 'Chaudary',
        email: 'Usamahussain@chaudary.com',

    });

    return (
        <>
            <label>
                First name:
                <input
                    value={form.firstName}
                    onChange={e => {
                        setForm({
                            ...form,
                            firstName: e.target.value
                        });
                    }}
                />
            </label>
            <label>
                Last name:
                <input
                    value={form.lastName}
                    onChange={e => {
                        setForm({
                            ...form,
                            lastName: e.target.value
                        });
                    }}
                />
            </label>
            <label>
                Email:
                <input
                    value={form.email}
                    onChange={e => {
                        setForm({
                            ...form,
                            email: e.target.value
                        });
                    }}
                />
            </label>
            <p>
                {form.firstName}{' '}
                {form.lastName}{' '}
                ({form.email})
            </p>
        </>
    );
} 