const EmailButton = () => {
    const openEmailClient = () => {
        const emailAdress = "juh7814@gamil.com";

        const mailtoLink = `mailto:${emailAdress}`;

        window.location.href = mailtoLink;
    };

    return (
        <button className="hover:text-green-300 hover:transition-all" onClick={openEmailClient}>Email</button>
    );
}

export default EmailButton;
