import MyClockImg from "./MyClockImg";
import MyClockTime from "./MyClockTime";

function MyClock() {
    return (
        <header className="w-full h-full flex flex-col justify-center items-center bg-emerald-200">
            <MyClockImg />
            <MyClockTime />
        </header>
    );
};

export default MyClock;