import Counter from './components/Counter';

const App = () => {
    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.body.className = theme
    }, [theme])

useEffect(() => {
    const handleResize = () => {
        console.log('Window resized')
    }

    window.addEventListener('resize', handleResize)

    return () => {
        window.removeEventListener('resize', handleResize)
    }
}, [ ])

}

export default App;

