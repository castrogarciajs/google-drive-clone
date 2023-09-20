import {IButton} from '@/interface/index';

export default function Button({style, title}: IButton) {
    return <button className={`btn ${style}`}>{title}</button>
};
