	private static final long serialVersionUID = 1L;

	@Override
	public ReturnWrap chkDelUserProduct(List params) {
		 return invoke(params,"PCChkRemoveSubProd");
	}

	/**
	 * 检查产品发布条件
	 *
	 * @param params
	 */
	@Override
	public void chkProdCanUseByCondtion(List<Object> params)
	{
		invoke(params, "PCChkProdCanUseByCondtion");
	}


}
