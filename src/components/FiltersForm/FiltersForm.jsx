import Select from "react-dropdown-select";
import { LOCATION_OPTIONS } from "@/shared/constants/index.js";
import { Formik, Form, Field } from "formik";
import sprite from "../../assets/icons/sprite.svg";
import styles from "./FiltersForm.module.css";

export default function FiltersForm() {
  return (
    <Formik>
      {({ resetForm }) => (
        <Form className={styles.formFilters}>
          <label className={styles.labelLocation}>
            Location
            <Field name="location">
              {({ field }) => (
                <Select
                  {...field}
                  placeholder="Location"
                  options={LOCATION_OPTIONS}
                  color="var(--color-button)"
                />
              )}
            </Field>
            <svg className={styles.iconLocation} aria-label={"Map icon"}>
              <use href={`${sprite}#icon-map`} />
            </svg>
          </label>

          <div className={styles.filtersWrap}>
            Filters
            <label className={styles.labelFilters}>
              Vehicle equipment
              <hr />
              <fieldset className={styles.fieldSet}>
                
                    <div className={styles.inputWrap}>
                      <Field type="checkbox" name="equipment" />
                      <div className={styles.checkBox}>
                        
                      </div>
                    </div>
              </fieldset>
            </label>

            <label className={styles.labelFilters}>
              Vehicle type
              <hr />
              <fieldset className={styles.fieldSet}>
          
                  <div className={styles.inputWrap}>
                    <Field type="radio" name="type"  />
                    <div className={styles.radioBtn}>
                     
                    </div>
                  </div>
           
              </fieldset>
            </label>
          </div>

          <div className={styles.buttonsWrap}>
            <button type="submit">Search</button>
            <button
              id="reset-button"
              type="button"
              aria-label={"Reset filter fields"}
              onClick={resetForm}
            >
              Reset
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
