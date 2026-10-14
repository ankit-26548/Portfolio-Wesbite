import personalLogo from '../../assets/Logo.png'

function BrandLogo() {
  return <span className="brand-logo" aria-hidden="true"><svg viewBox="360 140 690 470"><defs><filter id="ap-logo-cutout"><feColorMatrix type="matrix" values="0 0 0 0 .067 0 0 0 0 .067 0 0 0 0 .067 .8 .8 .8 0 -.35" /></filter></defs><image href={personalLogo} width="1408" height="768" filter="url(#ap-logo-cutout)" /></svg></span>
}

export default BrandLogo
