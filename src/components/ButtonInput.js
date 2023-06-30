import { PlusIcon } from '@heroicons/react/24/outline';

const ButtonInput = ({ text, onClick }) => {
  return (
    <button
      className="bg-primary1 text-white rounded-lg text-sm flex gap-3 h-11 items-center px-3 font-medium"
      onClick={onClick}
    >
      <PlusIcon className="w-5" />
      {text ? text : 'Input'}
    </button>
  );
};

export default ButtonInput;