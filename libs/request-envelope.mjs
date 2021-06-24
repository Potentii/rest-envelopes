export default class RequestEnvelope{
	/**
	 * @type {Object|Object[]}
	 */
	data;
	
	constructor(data){
		this.data = data;
	}
	
	
	static from(obj){
		return new RequestEnvelope(
			obj.data
		);
	}
}