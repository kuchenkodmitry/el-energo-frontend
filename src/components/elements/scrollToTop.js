export default function ScrollToTop () {
    const element = document.getElementById("TitlePage");
    if (element !== null) {
        element.scrollIntoView({behavior: 'smooth'})
    }
}