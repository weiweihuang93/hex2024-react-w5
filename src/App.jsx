function App() {

  return (
    <div className="container">
      <div className="mt-4">

        {/* 產品列表 */}
        <table className="table align-middle">
          <thead>
            <tr>
              <th>圖片</th>
              <th>商品名稱</th>
              <th>價格</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ width: "200px" }}>
                <img src="" alt="" />
              </td>
              <td>標題</td>
              <td>
                <del className="h6">原價 元</del>
                <div className="h5">特價 元</div>
              </td>
              <td>
                <div className="btn-group btn-group sm">
                  <button
                    type="button" 
                    className="btn btn-outline-secondary">
                      查看更多
                    </button>
                  <button
                    type="button" 
                    className="btn btn-outline-danger">
                      加到購物車
                    </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Modal */}
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          className="modal fade"
          id="productModal"
          tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title fs-5">
                  產品名稱：
                </h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close">
                </button>
              </div>
              <div className="modal-body">
                <img
                  src=""
                  alt=""
                  className="img-fluid" />
                <p>內容：</p>
                <p>描述：</p>
                <p>
                  價錢：
                  <del></del> 元
                </p>
                <div className="input-group align-items-center">
                  <label htmlFor="qtySelect">數量：</label>
                  <select
                    value=""
                    id="qtySelect"
                    className="form-select">
                    <option>1~10</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 購物車 */}
        <div className="text-end py-3">
          <button className="btn btn-outline-danger" type="button">
            清空購物車
          </button>
        </div>

        <table className="table align-middle">
          <thead>
            <tr>
              <th></th>
              <th>品名</th>
              <th style={{ width: "150px" }}>數量/單位</th>
              <th className="text-end">單價</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button type="button" className="btn btn-outline-danger btn-sm">
                  x
                </button>
              </td>
              <td></td>
              <td style={{ width: "150px" }}>
                <div className="d-flex align-items-center">
                  <div className="btn-group me-2" role="group">
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-sm">
                      -
                    </button>
                    <span
                      className="btn border border-dark"
                      style={{ width: "50px", cursor: "auto" }}>
                    </span>
                    <button
                      type="button"
                      className="btn btn-outline-dark btn-sm">
                      +
                    </button>
                  </div>
                  <span className="input-group-text bg-transparent border-0">
                    unit
                  </span>
                </div>
              </td>
              <td className="text-end">單項總價</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" className="text-end">
                總計：
              </td>
              <td className="text-end" style={{ width: "130px" }}></td>
            </tr>
          </tfoot>
        </table>

        {/* Form表單 */}
        <div className="my-5 row justify-content-center">
          <form className="col-md-6">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="請輸入 Email" />

                <p className="text-danger my-2"></p>
            </div>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                收件人姓名
              </label>
              <input
                id="name"
                className="form-control"
                placeholder="請輸入姓名" />

              <p className="text-danger my-2"></p>
            </div>

            <div className="mb-3">
              <label htmlFor="tel" className="form-label">
                收件人電話
              </label>
              <input
                id="tel"
                type="text"
                className="form-control"
                placeholder="請輸入電話" />

              <p className="text-danger my-2"></p>
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                收件人地址
              </label>
              <input
                id="address"
                type="text"
                className="form-control"
                placeholder="請輸入地址" />

              <p className="text-danger my-2"></p>
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                留言
              </label>
              <textarea
                id="message"
                className="form-control"
                cols="30"
                rows="10">
              </textarea>
            </div>
            <div className="text-end">
              <button type="submit" className="btn btn-danger">
                送出訂單
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
};

export default App