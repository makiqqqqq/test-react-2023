import React, {FormEvent, useEffect, useState} from 'react';
import NavBar from "../../components/NavBar";
import {hasLength, Item} from '../../utils/types';
import ModalItem from "../../components/ModalItem";
import ModalComment from "../../components/ModalComment";
import NoItems from "../../components/NoItems";
import Button from '../../components/Button';
import Input from '../../components/Input';
import Modal from '../../components/Modal';
import useLocalStorage from '../../utils/hooks/useLocalStorage';
import './Main.css';

const Main = () => {
    const [data, setData] = useLocalStorage('records', []);
    const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
    const [records, setRecords] = useState<Array<Item>>(() => data.length ? data : []);
    const activeRecord = records[activeItemIndex];

    const handleAddRecord = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const recordValue = formData.get('record');

        if (recordValue) {
            setRecords([...records, {text: recordValue.toString(), commentsCount: 0}]);
        }
        event.currentTarget.reset();
    }

    const handleAddComment = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const color = formData.get('color')?.toString();
        const description = formData.get('description')?.toString();

        if (activeRecord && !activeRecord.comments) {
            activeRecord.comments = [];
        }

        if (activeRecord && color && description) {
            activeRecord?.comments?.push({color, description});
        }

        setRecords([...records]);

        event.currentTarget.reset();
    }

    const handleGetItemIndex = (index: number) => {
        setActiveItemIndex(index);
    };

    const handleDeleteItem = (record: { text: string, commentsCount: number }) => {
        const newRecords = records.filter((r) => r !== record);
        setRecords(newRecords);
    }

    useEffect(() => {
        if (records) {
            setData(records)
        }
    }, [records]);

    useEffect(() => {
        if (activeItemIndex >= records.length) {
            setActiveItemIndex(Math.max(records.length - 1, 0));
        }
    }, [activeItemIndex, records]);

    return (
        <div className="main">
            <NavBar/>
            <div className="wrapper-modals">
                <Modal title="Items">
                    <form onSubmit={handleAddRecord}>
                        <div className="wrapper-items_modal">
                            <Input required className="add-input" name="record" type="text"
                                   placeholder="Type name here..."/>
                            <Button type="submit" className="add-btn" title="Add New"/>
                        </div>
                    </form>
                    {hasLength(records) ? (
                        <ul>
                            {records.map((record, index) => (
                                <ModalItem
                                    key={index}
                                    index={index}
                                    record={record}
                                    handleDeleteItem={handleDeleteItem}
                                    handleGetItemIndex={handleGetItemIndex}
                                    activeItemIndex={activeItemIndex}
                                />
                            ))}
                        </ul>
                    ) : (
                        <NoItems description="items"/>
                    )}
                </Modal>
                <Modal title="Comments">
                    {hasLength(activeRecord?.comments) ? (
                        <ul>
                            {activeRecord?.comments?.map((comment, index) => (
                                <ModalComment key={index} {...comment} />
                            ))}
                        </ul>
                    ) : (
                        <NoItems description="comments"/>
                    )}
                    <form onSubmit={handleAddComment}>
                        <div className="wrapper-comments_modal">
                            <Input name="color" className="color-input" type="color" placeholder="Type name here..."/>
                            <textarea name="description" placeholder="Type comment here..." required></textarea>
                            <Button type="submit" className="comments-btn" title="Add New"/>
                        </div>
                    </form>
                </Modal>
            </div>
        </div>
    );
};

export default Main;
