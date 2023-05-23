import React, { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'

export const FilterBar = () => {

 const {active, handleCheckBox} = useContext(PokemonContext)

  return <div className={`container-filters ${active ? 'active' : ''}`}>
    <div className='filter-by-type'>
      <span>Tipo</span>

  <div class="group-type">
            <input 
            type="checkbox" 
            onChange={handleCheckBox}
            name="normal" 
            id="normal"
            />
            <label htmlFor="normal">Normal</label>
        </div>
        <div class="group-type">
            <input 
            type="checkbox" 
            onChange={handleCheckBox}
            name="fighting" 
            id="fighting"
            />
            <label htmlFor="fighting">Lucha</label>
        </div>
        <div class="group-type">
            <input 
            type="checkbox" 
            onChange={handleCheckBox}
            name="flying" 
            id="flying"
            />
            <label htmlFor="flying">Volador</label>
        </div>
        <div class="group-type">
            <input 
            type="checkbox" 
            onChange={handleCheckBox}
            name="poison" 
            id="poison"
            />
            <label htmlFor="poison">Veneno</label>
        </div>
        <div class="group-type">
            <input 
            type="checkbox" 
            onChange={handleCheckBox}
            name="ground" 
            id="ground"
            />
            <label htmlFor="ground">Tierra</label>
        </div>
        <div class="group-type">
            <input 
            type="checkbox" 
            onChange={handleCheckBox}
            name="rock" 
            id="rock"
            />
            <label htmlFor="rock">Roca</label>
        </div>
        <div class="group-type">
            <input 
            type="checkbox" 
            onChange={handleCheckBox}
            name="bug" 
            id="bug"
            />
            <label htmlFor="bug">Bicho</label>
        </div>
        <div class="group-type">
            <input 
            type="checkbox" 
            onChange={handleCheckBox}
            name="ghost" 
            id="ghost"
            />
            <label htmlFor="ghost">Fantasma</label>
        </div>
        <div class="group-type">
            <input 
            type="checkbox" 
            onChange={handleCheckBox}
            name="steel" 
            id="steel"
            />
            <label htmlFor="steel">Acero</label>
        </div>
        <div class="group-type">
            <input 
            type="checkbox" 
            name="fire" 
            id="fire"
            />
            <label htmlFor="fire">Fuego</label>
        </div>
        <div class="group-type">
            <input 
            type="checkbox" 
            name="water" 
            id="water"
            />
            <label htmlFor="water">Agua</label>
        </div>
        <div class="group-type">
            <input 
            type="checkbox" 
            name="grass" 
            id="grass"
            />
            <label htmlFor="grass">Planta</label>
        </div>
        <div class="group-type">
            <input 
            type="checkbox" 
            name="electric" 
            id="electric"
            />
            <label htmlFor="electric">Eléctrico</label>
        </div>
        <div class="group-type">
            <input 
            type="checkbox" 
            name="psychic" 
            id="psychic"
            />
            <label htmlFor="psychic">Psíquico</label>
        </div>
        <div class="group-type">
            <input 
            type="checkbox" 
            name="ice" 
            id="ice"
            />
            <label htmlFor="ice">Hielo</label>
        </div>
        <div class="group-type">
            <input 
            type="checkbox" 
            name="dragon" 
            id="dragon"
            />
            <label htmlFor="dragon">Dragón</label>
        </div>
        <div class="group-type">
            <input 
            type="checkbox" 
            name="dark" 
            id="dark"
            />
            <label htmlFor="dark">Siniestro</label>
        </div>
        <div class="group-type">
            <input 
            type="checkbox" 
            name="fairy" 
            id="fairy"/>
            <label htmlFor="fairy">Hada</label>
        </div>
        <div class="group-type">
            <input 
            type="checkbox" 
            name="unknow" 
            id="unknow"/>
            <label htmlFor="unknow">Unknow</label>
        </div>
        <div class="group-type">
            <input 
            type="checkbox" 
            name="shadow"
            id="shadow"
            />
            <label htmlFor="shadow">Oscuro</label>
        </div>
       

    </div>

  </div>
  
}
