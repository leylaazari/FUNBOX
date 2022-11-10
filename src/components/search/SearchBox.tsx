import { useForm } from "react-hook-form";
import { ISearchProps } from "src/common/interfaces";
import { SearchType } from "src/common/types";
import "./style/style.scss";

const SearchBox = ({ handleSubmitForm }: ISearchProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchType>({});

  const onSubmit = handleSubmit((data: SearchType) => {
    handleSubmitForm(data);
  });

  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <div className="search-result-wrapper">
          <div className="search-suggest-gradient">
            <form className="search-suggest-form" onSubmit={onSubmit}>
              <div className="search-result-input-wrapper">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="flex-grow-2 w-100">
                    <input
                      data-testid="input-search"
                      type="searchText"
                      id="js__search-text"
                      placeholder="Search in film, actor, ..."
                      {...register("searchText", {
                        maxLength: 500,
                      })}
                    />
                  </div>
                  <div className="flex-grow-1">
                    <button
                      data-testid="btn-search"
                      type="submit"
                      className="c-btn-Search ml-5 mr-5 text-white"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
