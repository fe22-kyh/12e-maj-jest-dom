export default function WelcomePage({language}) {

  if(language === 'sv') {
    return (
      <h2>Välkommen</h2>
    )
  } else {
    return (
      <h2>Welcome</h2>
    )
  }

}