import useScrollVisibility from '../functionality/useScrollVisibility';

function Footer({ title }) {
    const isVisible = useScrollVisibility();

    return (
        <div className={`footer ${isVisible ? 'visible' : 'hidden'}`}>
            © {new Date().getFullYear()} {title}. All rights reserved.
        </div>
    );
}

export default Footer;