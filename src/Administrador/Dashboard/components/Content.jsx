export default function NavBar(props) {
    return (
        <>
        <div className="content p-4">
            {props.children}
        </div>
        </>
    );
}