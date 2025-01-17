import React from "react";
import spoon from "../../../assets/logo/SpoonLogo.png";
import vvoj from "../../../assets/logo/VVOJ_Logo_RGB.png";
import DataCheckbox from "./DataCheckbox";
import DataText from "./DataText";

function LetterUI({ value, getCurrentDate }) {
	const filteredDataText = DataText(value).filter(item => {
		return value[item.id];
	});

	const wordsInside = [
		value.subjectInside1 && "brieven",
		value.subjectInside2 && value.subjectInside2inclusive === "inclusief"
			? `e-mails ${value.subjectInside2inclusive} bijlagen`
			: `e-mails maar alleen de e-mails die een bijlage hebben inclusief die bijlagen`,
		//value.subjectInside6 && "gespreksverslagen",
		value.subjectInside4 && "sms'jes en WhatsApp-berichten"
	].filter(Boolean);
	const wordsOutside = [
		value.subjectOutside1 && "brieven",
		value.subjectOutside2 && value.subjectOutside2inclusive === "inclusief"
			? `e-mails ${value.subjectOutside2inclusive} bijlagen`
			: `e-mails maar alleen de e-mails die een bijlage hebben inclusief die bijlagen`,
		//value.subjectOutside6 && "gespreksverslagen",
		value.subjectOutside4 && "sms'jes en WhatsApp-berichten"
	].filter(Boolean);
	return (
		<div className="letterComplete">
			<div className="letterUIHeading">
				<h1>Je Lob-verzoek in wording:</h1>
				<div className="letterUILogos">
					<img src={spoon} alt="logo Expertisecentrum SPOON" />
					<img src={vvoj} alt="logo vereniging van onderzoeksjournalisten" />
				</div>
			</div>
			<br />
			<div id="letterUI" style={{ fontFamily: "Arial" }}>
				<div className="adressAuthority">
					{value.selectedAuthority && (
						<div className="letterUIAddress">
							<p className="scribble">{value.selectedAuthority.Bestuursorgaan}</p>
							<p className="scribble">{value.selectedAuthority.Postbus}</p>
							<p className="scribble">
								{value.selectedAuthority.Postcode} {value.selectedAuthority.Plaats}
							</p>
							<p className="scribble">{value.selectedAuthority.Land}</p>
							<br />
						</div>
					)}
				</div>
				<div>
					<p>
						<b className="scribble">{value.userCityName}</b>, {getCurrentDate()}
					</p>
					<br />
					<p>Betreft: indiening Lob-verzoek</p>
					<br />
					<p>Zeer geachte heer/mevrouw,</p>
					<br />
					<p>
						Met een beroep op de Landsverordening openbaarheid van bestuur (hierna: Lob) verzoek ik,{" "}
						<b className="scribble">{value.userName}</b>,
						{value.userJournalist ? <b className="scribble"> journalist,</b> : " "}
						{value.userOnBehalfInput.length ? (
							<span className="scribble">werkzaam voor/in opdracht van {value.userOnBehalfInput}, </span>
						) : (
							""
						)}
						{value.userCompanyNameInput.length ? (
							<span className="scribble"> u namens {value.userCompanyNameInput}</span>
						) : (
							""
						)}{" "}
						om openbaarmaking van hieronder nader te specificeren informatie bij of onder u.
					</p>
					<br />
					<p>
						Het onderwerp waarover ik informatie vraag, is: <b className="scribble">{value.subjectLong}</b>.{" "}
						{value.subjectDateStart ? (
							<span className="scribble"> Het verzoek betreft de periode van {value.subjectDateStart}</span>
						) : (
							""
						)}
						{value.subjectDateEnd && value.subjectDateStart ? (
							<span className="scribble"> tot {value.subjectDateEnd}.</span>
						) : (
							""
						)}
					</p>
					<br />

					{value.step6 && (
						<React.Fragment>
							{value.subjectType === "specific" ? (
								<React.Fragment>
									<h3 className="tussenkopje">Informatie</h3>
									<p>Concreet vraag ik u om (kopie van) de volgende documenten:</p>
									<br />
									{value.subjectTextObject.map(item => (
										<p className="scribble">
											- {item.subjectText}
											{item.subjectDate ? ` (${item.subjectDate})` : ""}
										</p>
									))}
									<br />
									{value[10] ||
									value[11] ||
									value[12] ||
									value[13] ||
									value[14] ||
									value[15] ||
									value[16] ||
									value[17] ? (
										<p>Bovendien ontvang ik graag (kopie van) de volgende onderliggende documenten:</p>
									) : (
										""
									)}
									<br />
								</React.Fragment>
							) : (
								<React.Fragment>
									<h3>Informatie</h3>
									<p>
										Concreet vraag ik u om (kopie van) informatie met betrekking tot het onderwerp van dit verzoek
										neergelegd in de volgende documenten{" "}
										<b className="scribble">
											{value.subjectLong}
											{value.subjectDateStart && " van " + value.subjectDateStart}
											{value.subjectDateEnd && " tot " + value.subjectDateEnd}
										</b>
										:
									</p>
								</React.Fragment>
							)}
							<br />

							{value[10] && (
								<p className="scribble">{`- Vergaderstukken${
									Object.keys(value.subjectMeeting).some(key => value.subjectMeeting[key]) ? ", waaronder: " : ""
								}${Object.keys(value.subjectMeeting)
									.filter(key => value.subjectMeeting[key])
									.map(key => DataCheckbox[key])
									.join(", ")};`}</p>
							)}

							{value[12] && value[13] && (
								<p className="scribble">{`- Interne correspondentie en gespreksverslagen ${wordsInside &&
									` (${wordsInside.join(", ")})`};`}</p>
							)}

							{value[12] && value[14] && (
								<p className="scribble">{`- Externe correspondentie en gespreksverslagen ${wordsOutside &&
									`(${wordsOutside.join(", ")})`}${value.subjectLongOrganisation &&
									` tussen uw overheidsinstantie en ${value.subjectLongOrganisation}`};`}</p>
							)}

							{value.subjectInside5 && <p className="scribble">{"- Memo's, notities;"}</p>}

							{value[11] && (
								<p className="scribble">
									{`- Rapporten, adviezen${
										value.subjectRapportText ? " waaronder: " + value.subjectRapportText : ""
									};  `}{" "}
								</p>
							)}

							{value[15] && (
								<p className="scribble">{`- Financiële documenten${
									value.subjectFinancialText ? " waaronder: " + value.subjectFinancialText : ""
								};  `}</p>
							)}

							{value[16] && <p className="scribble">{"- Datasets;"} </p>}
							{value[17] && <p className="scribble">{`-  ${value.subjectElseText}`} </p>}
							<br />
						</React.Fragment>
					)}
				</div>
				{value.step9 &&
					filteredDataText.map(item => (
						<div key={item.id}>
							<div>
								<h3 className="tussenkopje scribble">{item.title}</h3>
								<p className="scribble">{item.sentence}</p>
								<br />
							</div>
						</div>
					))}
				<div>
					<p>
						Graag ontvang ik schriftelijk (per brief of per e-mail) een bevestiging van de ontvangst van dit
						Lob-verzoek.
						<br />
						<br />
						Mocht u belanghebbenden de gelegenheid gaan bieden tot het geven van zienswijzen dan ontvang ik daarvan
						graag vooraf schriftelijk of per e-mail bericht.
					</p>
					<br />
					<p>
						U dient binnen de termijn van 3 weken een besluit te nemen op dit verzoek. Geen of onvoldoende antwoord op
						de vervaldatum zal aanleiding geven tot beroep bij de bestuursrechter wegens het niet tijdig nemen van een
						beslissing.
					</p>
					<br />
					<p>Met vriendelijke groet, </p>
					<br />
					<div className="letterUIAddress">
						<p className="userSignature"></p>
						<p className="scribble">{value.userName}</p>
						<p className="scribble">{value.userCompanyName}</p>
						<p className="scribble">
							{value.userAdress} {value.userAdressNumber}
						</p>
						<p className="scribble">
							{value.userZipcode} {value.userCityName}
						</p>
						<p className="scribble">{value.userEmail}</p>
						<p className="scribble">{value.userPhoneNumber}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default LetterUI;
