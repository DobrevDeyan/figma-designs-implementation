import Select, { components } from "react-select"
import { ReactComponent as ArrowIcon } from "../../assets/product-search-images/select-arrow.svg"
import "./search-view.css"

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
        <div className="filter-item"></div>
      </div>
    </>
  )
}
export default Search
