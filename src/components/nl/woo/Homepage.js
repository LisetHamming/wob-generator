import React from "react";
import { Link } from "react-router-dom";
import machine from "../../../assets/images/WOO_KNOP.png";
import gifLogo from "../../../assets/logo/Spoon_Logo_animatie_BlackonWhite_Gif.gif";
import vvojLogo from "../../../assets/logo/VVOJ_Logo_RGB.png";

function Homepage({ clickHandlerSetLaw, wet }) {
	return (
		<div>
			<div className="selectLanguage">
				<Link to="/NL/woo/">NL</Link>
				<Link to="/EN/woo/">EN</Link>
			</div>
			<div className="homepageLogos">
				<img src={gifLogo} className="logo_SPOON" alt="logo expertisecentrum spoon" />
				<img src={vvojLogo} className="logo_VVOJ" alt="logo vvoj" />
			</div>
			<div className="homepageBlock">
				{/* <img src={gifLogo} className="logo_SPOON" alt="logo expertisecentrum spoon" /> */}
				<div className="blockText">
					<p className="logo">Woo-generator</p>
					<h1>Schrijf in 3 simpele stappen je eigen Woo-verzoek</h1>
					<p>Welkom bij de Woo-generator! </p>
					<p> Je bent hier omdat je informatie wilt opvragen bij een overheidsinstantie.</p>
					<p>
						Op 1 mei 2022 is de Wet openbaarheid van bestuur (Wob) vervangen door de Wet open overheid (Woo). De
						Wob-generator is daarom de Woo-generator geworden en we hebben meteen de gelegenheid aangegrepen om de
						generator te verbeteren. Vanaf nu dien je dus een Woo-verzoek in als je overheidsinformatie wilt opvragen.
					</p>
					<p>Met de Woo-generator is dat een koud kunstje.</p>

					<ol>
						<li>1. Je vult een aantal gegevens over jezelf in</li>
						<li>2. Je selecteert een overheidsinstantie</li>
						<li>3. Je kiest wat voor documenten of informatie je zoekt</li>
					</ol>
					<div className="nextButtons">
						<Link to="/NL/woo/StapVoorAf" className="start" onClick={e => clickHandlerSetLaw("Woo")}>
							Start je woo-verzoek
						</Link>
						{/* <Link to="/EN/bes/StapVoorAf" onClick={e => clickHandlerSetLaw("Wob BES")}>
						WOB-BES EN
					</Link>

					<Link to="/EN/lob/StapVoorAf" onClick={e => clickHandlerSetLaw("Lob")}>
						LOB EN
					</Link> */}
					</div>
				</div>
				<div>
					<img src={machine} alt="" />
				</div>
			</div>
		</div>
	);
}
export default Homepage;
