import styles from './styles'

function App() {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={styles.boxWidth}>
          <Navbar/>
        </div>
      </div>
    </div>
  );
}

export default App;
