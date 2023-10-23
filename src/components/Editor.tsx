import { lazy } from 'react';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = lazy(() => import('react-quill'));

type EditorProps = {
  onChange: (value: string) => void;
  value: string;
};

export const Editor = ({ onChange, value }: EditorProps) => {
  return (
    <div className="bg-white">
      <ReactQuill theme="snow" value={value} onChange={onChange} />
    </div>
  );
};
