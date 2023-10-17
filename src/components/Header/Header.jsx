import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://s3-alpha.figma.com/hub/file/1913095808/a7bdc469-cd70-4ea1-bb57-b59204ad8182-cover.png"
        alt="logo"
        className={s.logo}
      />
    </header>
  );
};

export default Header;
