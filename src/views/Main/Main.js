import React from "react";

const Main = ({ history }) => {
  return (
    <div>
      <div className="pageTit">
        <h2>Members</h2>
      </div>
      <div className="content">
        <article>
          <div className="boardTop">
            <span className="left">
              <span className="searchBasic">
                <span className="selectSet">
                  <select name="searchType">
                    <option value="">Type</option>
                    <option value="1">Sign up</option>
                    <option value="2">Uninvited</option>
                    <option value="3">Invited</option>
                  </select>
                </span>
                <span className="searchSet">
                  <span className="sInput">
                    <input
                      type="text"
                      name="searchKeyword"
                      placeholder="Search"
                    />
                  </span>
                  <button className="btnReset">reSet</button>
                </span>
              </span>
            </span>
            <span className="right">
              <span>[Master PIN code : 898685]</span>
              <button className="btnReject">Reject</button>
              <button className="btnApprove">Approve</button>
              <button className="btnDelete">Delete</button>
            </span>
          </div>
          <div className="tls memberList">
            <table>
              <colgroup>
                <col width="10" />
                <col width="50" />
                <col width="50" />
                <col width="50" />
                <col width="100" />
                <col width="100" />
                <col width="110" />
                <col width="70" />
                <col width="70" />
                <col width="10" />
                <col width="10" />
              </colgroup>
              <thead>
                <tr>
                  <th className="tC">
                    <span className="checkSet noLabel">
                      <input type="checkbox" id="chkall" />
                      {/* checked={memberNos.length === signUpLength? true: false} */}
                      <label htmlFor="chkall">
                        <i></i>
                      </label>
                    </span>
                  </th>
                  <th>First Name</th>
                  <th>Middle Name</th>
                  <th>Last Name</th>
                  <th>Company</th>
                  <th>Department</th>
                  <th>E-mail</th>
                  <th>
                    <button className="sorting">Type</button>
                  </th>
                  <th>Approval date</th>
                  <th className="tC">Reply</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr key={"member0"}>
                  <td className="listYet" colSpan="8">
                    NO results found
                  </td>
                </tr>
                {/* {list.length === 0 && (
                  <tr key={"member0"}>
                    <td className="listYet" colSpan="8">
                      NO results found
                    </td>
                  </tr>
                )}
                {list.map((item, i) => {
                  return (
                    <tr key={"member" + i} className={item.editYn}>
                      <td className="tC">
                        <span className="checkSet noLabel">
                          {item.division === "1" && (
                            <input
                              type="checkbox"
                              id={"chk" + i}
                              onChange={(e) =>
                                handleSingleCheck(
                                  e.target.checked,
                                  item.memberNo
                                )
                              }
                              checked={
                                memberNos.includes(item.memberNo) ? true : false
                              }
                            />
                          )}
                          {item.division !== "1" && (
                            <input type="checkbox" id={"chk" + i} disabled />
                          )}
                          <label htmlFor={"chk" + i}>
                            <i></i>
                          </label>
                        </span>
                      </td>
                      {item.approveDiv === "N" && item.division === "1" ? (
                        <td className="waiting">
                          {item.editYn === "edit" ? (
                            <input
                              type="text"
                              name="firstName"
                              value={item.firstName || ""}
                              onChange={(e) => inputToggle(e, i)}
                            />
                          ) : (
                            <input
                              type="text"
                              value={item.firstName || ""}
                              readOnly
                            />
                          )}
                        </td>
                      ) : (
                        <td>
                          {item.editYn === "edit" ? (
                            <input
                              type="text"
                              name="firstName"
                              value={item.firstName || ""}
                              onChange={(e) => inputToggle(e, i)}
                            />
                          ) : (
                            <input
                              type="text"
                              value={item.firstName || ""}
                              readOnly
                            />
                          )}
                        </td>
                      )}
                      <td>
                        {item.editYn === "edit" ? (
                          <input
                            type="text"
                            name="middleName"
                            value={item.middleName || ""}
                            onChange={(e) => inputToggle(e, i)}
                          />
                        ) : (
                          <input
                            type="text"
                            value={item.middleName || ""}
                            readOnly
                          />
                        )}
                      </td>
                      <td>
                        {item.editYn === "edit" ? (
                          <input
                            type="text"
                            name="lastName"
                            value={item.lastName || ""}
                            onChange={(e) => inputToggle(e, i)}
                          />
                        ) : (
                          <input
                            type="text"
                            value={item.lastName || ""}
                            readOnly
                          />
                        )}
                      </td>
                      <td>
                        {item.editYn === "edit" ? (
                          <input
                            type="text"
                            name="company"
                            value={item.company || ""}
                            onChange={(e) => inputToggle(e, i)}
                          />
                        ) : (
                          <input
                            type="text"
                            value={item.company || ""}
                            readOnly
                          />
                        )}
                      </td>
                      <td>
                        {item.editYn === "edit" ? (
                          <input
                            type="text"
                            name="department"
                            value={item.department || ""}
                            onChange={(e) => inputToggle(e, i)}
                          />
                        ) : (
                          <input
                            type="text"
                            value={item.department || ""}
                            readOnly
                          />
                        )}
                      </td>
                      <td>
                        {item.editYn === "edit" ? (
                          <input
                            type="text"
                            name="email"
                            value={item.email || ""}
                            onChange={(e) => inputToggle(e, i)}
                          />
                        ) : (
                          <input
                            type="text"
                            value={item.email || ""}
                            readOnly
                          />
                        )}
                      </td>
                      <td>
                        {item.division === "1"
                          ? "Sign up"
                          : item.division === "2"
                          ? "Uninvited"
                          : "Invited"}
                      </td>
                      <td>
                        {item.approveDt
                          ? moment(item.approveDt).format("YYYY-MM-DD")
                          : "-"}
                      </td>
                      <td className="tC">
                        <a
                          href={`mailto:${item.email}?subject=[SDI-ON] Thank you for your inquiry`}
                          className="btnS line btnSend"
                        >
                          Mail
                        </a>
                      </td>
                      <td className="tC">
                        <button
                          className="btnModify"
                          onClick={() => fnModify(i)}
                        >
                          Modify
                        </button>
                        <span className="btn">
                          <button
                            className="btnOk"
                            onClick={() => fnComfirm(i)}
                          >
                            OK
                          </button>
                          <button
                            className="btnCancel"
                            onClick={() => fnCancel(i)}
                          >
                            Cancel
                          </button>
                        </span>
                      </td>
                    </tr>
                  );
                })} */}
              </tbody>
            </table>
          </div>
          <div className="paginateSet">
            <span className="left">
              Row per page
              <span className="selectSet">
                <select>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                </select>
              </span>
            </span>
            <span className="paginate">
              <span></span>
            </span>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Main;
