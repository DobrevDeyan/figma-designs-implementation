/* eslint-disable @typescript-eslint/no-unused-vars */
import Select, { components } from "react-select"
import filters from "../../assets/product-search-images/filters.svg"
import bottles from "../../assets/product-search-images/plastic-bottles.svg"
import { ReactComponent as ArrowIcon } from "../../assets/product-search-images/select-arrow.svg"
import "./search-view.css"
import React from 'react';


const DropdownIndicator = (props: any) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <ArrowIcon />
      </components.DropdownIndicator>
    )
  )
}
const customStyles = {
  control: (provided: any, state: { isFocused: any }) => ({
    ...provided,
    border: "1px solid #050723",
    borderRadius: "4px",
    boxShadow: state.isFocused ? "0 0 0 1px blue" : "none",
    marginRight: "16px",
    minHeight: "unset",
    height: "32px",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "#0727b7",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "16px",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "16px",
  }),
  container: (provided: any) => ({
    ...provided,
    width: "150px",
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none",
  }),
  valueContainer: (provided: any) => ({
    ...provided,
  }),
  input: (provided: any) => ({
    ...provided,
    margin: "0px",
    padding: "0px",
  }),
}
const options1 = [
  { value: "dsads", label: "Производител", isDisabled: true },
  { value: "Апартамент", label: "Апартамент" },
  { value: "Магазин", label: "Магазин" },
  { value: "Студио", label: "Студио" },
  { value: "Мезонет", label: "Мезонет" },
]
const options2 = [
  { value: "", label: "Наличност", isDisabled: true },
  { value: "Двустаен", label: "Двустаен" },
  { value: "Тристаен", label: "Тристаен" },
  { value: "Многостаен", label: "Многостаен" },
  { value: "Боксониера", label: "Боксониера" },
]
const options3 = [
  { value: "", label: "Материал", isDisabled: true },
  { value: "111111", label: "111111" },
  { value: "222222", label: "222222" },
  { value: "33333", label: "33333" },
  { value: "44444", label: "44444" },
]
const options4 = [
  { value: "", label: "Обем", isDisabled: true },
  { value: "111111", label: "111111" },
  { value: "222222", label: "222222" },
  { value: "33333", label: "33333" },
  { value: "44444", label: "44444" },
]

function Search() {
  return (
    <>
      <h4 className="section-title">Резултати за “”</h4>
      <hr />
      <div className="filter">
        <Select
          options={options1}
          className="category-select"
          styles={customStyles}
          placeholder="Производител"
          components={{ DropdownIndicator }}
        />
        <Select
          options={options2}
          className="category-select"
          styles={customStyles}
          placeholder="Наличност"
          components={{ DropdownIndicator }}
        />
        <Select
          options={options3}
          className="category-select"
          styles={customStyles}
          placeholder="Материал"
          components={{ DropdownIndicator }}
        />
        <Select
          options={options4}
          className="category-select"
          styles={customStyles}
          placeholder="Обем"
          components={{ DropdownIndicator }}
        />
      </div>
      <div className="filter-results">
        <div className="filter-item">
          <div className="container-image">
            <img src={filters} alt="productImage" />
            <div className="stock">
              <p>Налично на склад</p>
            </div>
          </div>
          <div className="filter-item-description">
            <div>
              <h4 className="item-title">
                Мембранен филтър МCЕ (микс целулозни естери)
              </h4>
              <p>4094.5ВР</p>
            </div>
            <p className="item-brand">filtratech</p>
            <p className="item-information">
              Мембраните MCE са направени от влакна от целулозен ацетат и
              целулозен нитрат, те са естествено хидрофилни, механично стабилни
              и имат висока товароносимост. Подходящи са за микробиологичен
              анализ, за преброяване на колонии или за предварително филтриране
              и избистряне на проби. Предлага се в кутия от 100 единици (с
              изключение на диаметър 13 mm в кутия от 200 единици).
            </p>
          </div>
        </div>
        <div className="filter-item">
          <div className="container-image">
            <img src={bottles} alt="productImage" />
            <div className="stock">
              <p>Налично на склад</p>
            </div>
          </div>
          <div className="filter-item-description">
            <div>
              <h4 className="item-title">Колба със шлиф, капковидна форма</h4>
              <p>4094.5ВР</p>
            </div>
            <p className="item-brand">Simax</p>
            <p className="item-information"></p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Search
