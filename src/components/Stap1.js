import React, { Component, useState } from "react"
import Popup from "./popups/Popup"
import PopupButton from "./popups/PopupButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Stap1({ value, changeHandlerUser, changeHandlerCheckbox, changeHandlerCompanyName }) {
    const [popUp, setPopUp] = useState(false)

    return (
        <div>
				<h2>Stap 1: Over jezelf</h2>
				<form>	
					<label>Ik ben een journalist 
						<input id="userJournalist" value="userJournalist" checked={value.userJournalist} onChange={changeHandlerCheckbox} type="checkbox" />
					</label><PopupButton number="1" />
					<label>Ik Wob namens een (media-) organisatie
						<input id="userCompany" value="userCompanyName" checked={value.userCompanyName} onChange={changeHandlerCompanyName} type="checkbox" />
					</label><PopupButton number="3" />
					{value.userCompanyName&&
					<label>Naam organisatie
						<input id="userCompanyNameInput" value={value.userCompanyNameInput} onChange={changeHandlerUser} type="text"/><br/>
					</label>
					}
					<label>Ik wil mijn doel toelichten
						<input id="userNeedsGoal" value="userNeedsGoal" checked={value.userNeedsGoal} onChange={changeHandlerCheckbox} type="checkbox" />
					</label><PopupButton number="2" />
					{value.userNeedsGoal&&		
					<label>Journalistieke doel (verplicht)
						<input id="userGoalInput" value={value.userGoalInput} onChange={changeHandlerUser} type="text"/><br/>
					</label>
					}

							
					<label> Naam (verplicht)
			           <input value={value.userName} onChange={changeHandlerUser} id="userName" type="text" name="userInfo" placeholder="vul hier je naam in" /><br/>
			        </label>
			        <label> Postadres
			           <input value={value.userAdress} onChange={changeHandlerUser}id="userAdress" type="text" name="userInfo" placeholder="Vul hier je postadres in"/><br/>
			        </label>
			        <label> Nr.
			           <input value={value.userAdressNumber} onChange={changeHandlerUser} id="userAdressNumber" type="text" name="userInfo" placeholder="nummer" /><br/>
			        </label>
			        <label> Postcode
			           <input value={value.userZipcode} onChange={changeHandlerUser} id="userZipcode" type="text" name="userInfo" placeholder="Postcode" /><br/>
			        </label>
			        <label> Plaats
			           <input value={value.userCityName} onChange={changeHandlerUser} id="userCityName" type="text" name="userInfo" placeholder="Vul hier een plaats in Nederland in" /><br/>
			        </label>
			        <label> E-mail
			           <input value={value.userEmail} onChange={changeHandlerUser} id="userEmail" type="text" name="userInfo" placeholder="Vul hier je e-mailadres in" /><br/>
			        </label>
			        <label> Telefoon
			           <input value={value.userPhoneNumber} onChange={changeHandlerUser} id="userPhoneNumber" type="text" name="userInfo" placeholder="Vul hier je telefoonnummer in" /><br/>
			        </label>								
				</form>
				
				<Link to="/">Terug</Link>
				<Link to="/Stap1_2">Volgende</Link>
			</div>
    )

}
export default Stap1