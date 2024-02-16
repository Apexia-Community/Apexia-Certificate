export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="flex justify-center items-center w-full h-20 border-t text-black  dark:text-white mt-10">
            <p className="text-center">©{year} Apexia</p>
        </footer>
    );
}