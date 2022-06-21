import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  
addCategory(obj){
  return this.http.post("http://localhost:4000/category",obj )
}

listCategory(){
  return this.http.get('http://localhost:4000/category')
}

addhotel(obj){
  return this.http.post("http://localhost:4000/upload",obj )
}

listhotel(){
  return this.http.get('http://localhost:4000/list')
}

deletehotel(id){
  return this.http.delete(`http://localhost:4000/delete/${id}`);
}

updatehotel(id, data){
  return this.http.put(`http://localhost:4000/update/${id}`, data);
}

getcurrent(id){
  return this.http.get(`http://localhost:4000/view/${id}`);
}

addfamily(obj){
  return this.http.post("http://localhost:4000/family",obj )
}

listfamily(){
  return this.http.get('http://localhost:4000/family/list')
}

deletefamily(id){
  return this.http.delete(`http://localhost:4000/family/delete/${id}`);
}

updatefamily(id, data){
  return this.http.put(`http://localhost:4000/family/update/${id}`, data);
}

getcurrentfamily(id){
  return this.http.get(`http://localhost:4000/family/view/${id}`);
}

addhoneymoon(obj){
  return this.http.post("http://localhost:4000/honeymoon",obj )
}

listhoneymoon(){
  return this.http.get('http://localhost:4000/honeymoon/list')
}

deletehoneymoon(id){
  return this.http.delete(`http://localhost:4000/honeymoon/delete/${id}`);
}

updatehoneymoon(id, data){
  return this.http.put(`http://localhost:4000/honeymoon/update/${id}`, data);
}

getcurrenthoneymoon(id){
  return this.http.get(`http://localhost:4000/honeymoon/view/${id}`);
}

addbusiness(obj){
  return this.http.post("http://localhost:4000/business",obj )
}

listbusiness(){
  return this.http.get('http://localhost:4000/business/list')
}

deletebusiness(id){
  return this.http.delete(`http://localhost:4000/business/delete/${id}`);
}

updatebusiness(id, data){
  return this.http.put(`http://localhost:4000/business/update/${id}`, data);
}

getcurrentbusiness(id){
  return this.http.get(`http://localhost:4000/business/view/${id}`);
}

addadventure(obj){
  return this.http.post("http://localhost:4000/adventure",obj )
}

listadventure(){
  return this.http.get('http://localhost:4000/adventure/list')
}

deleteadventure(id){
  return this.http.delete(`http://localhost:4000/adventure/delete/${id}`);
}

updateadventure(id, data){
  return this.http.put(`http://localhost:4000/adventure/update/${id}`, data);
}

getcurrentadventure(id){
  return this.http.get(`http://localhost:4000/adventure/view/${id}`);
}

addcar(obj){
  return this.http.post("http://localhost:4000/car", obj )
}

listcar(){
  return this.http.get('http://localhost:4000/car/list')
}

deletecar(id){
  return this.http.delete(`http://localhost:4000/car/delete/${id}`);
}

updatecar(id, data){
  return this.http.put(`http://localhost:4000/car/update/${id}`, data);
}

getcurrentcar(id){
  return this.http.get(`http://localhost:4000/car/view/${id}`);
}

}
