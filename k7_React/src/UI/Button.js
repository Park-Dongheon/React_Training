export default function Button({caption, bcolor, handleClick}) {
    const colorB = {
        'blue' : 'bg-blue-400',
        'orange' : 'bg-orange-400',
    }

    const colorBHover  = {
        'blue' : 'hover:bg-blue-600',
        'orange' : 'hover:bg-orange-600',
    }

    return (
        <button className={`inline-flex 
                           rounded-md
                           px-8 py-3
                           justify-center items-center
                           text-white font-bold
                           ${colorB[bcolor]}
                           ${colorBHover[bcolor]}
                          `}
                onClick={handleClick} >
            {caption}
        </button>
    );
}
