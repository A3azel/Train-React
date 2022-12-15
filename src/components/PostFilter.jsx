import React, {useState} from 'react';
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    const [option, setOption] = useState([
        {value: 'title',name: 'По заголовку'},
        {value: 'postText',name: 'По тексту'}
    ]);
    return (
        <div>
            <MyInput placeholder={'Find...'}
                     value={filter.query}
                     onChange={e=>setFilter({...filter, query:e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort:selectedSort})}
                defaultValue={'Sorted by'}
                option={option}/>
        </div>
    );
};

export default PostFilter;