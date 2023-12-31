const gitHubUrl = "https://github.com";

const getFullYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <p>
        &copy;{getFullYear}
        <br />
        <a href={gitHubUrl} target="_blank" rel="noreferrer">
          See Code in GitHub
        </a>
      </p>
    </footer>
  );
}
