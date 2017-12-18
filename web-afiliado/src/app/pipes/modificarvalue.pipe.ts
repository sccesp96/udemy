import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modificarValue'
})
export class ModificarValuePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    
    if(args=='imagen'){
        if(value.ImageSets == null){
          return 'assets/images/noimage.png';
        }else if(value.ImageSets.ImageSet[0]==null){
          // EL MEDIUM IMAGE SI LUEGO PONGO EL HEIGHT MAYOR QUE SU HEIGHT PIERDE CALIDAD Y SE VE BORROSA
          return value.ImageSets.ImageSet.LargeImage.URL;
          // return value.ImageSets.ImageSet.MediumImage.URL;
          
        }
        else{
          return value.ImageSets.ImageSet[0].LargeImage.URL;
          // return value.ImageSets.ImageSet[0].MediumImage.URL;
          
        }
      }

      // IMAGENES CAROUSEL

      if(args=='imagen-carousel1'){
        if(value.ImageSets == null){
          return 'assets/images/noimage.png';
        }else if(value.ImageSets.ImageSet[0]==null){
          return value.ImageSets.ImageSet.LargeImage.URL;
        }
        else{
          return value.ImageSets.ImageSet[0].LargeImage.URL;
        }
      }

      if(args=='imagen-carousel2'){
        if(value.ImageSets == null){
          return 'assets/images/noimage.png';
        }
        else if(value.ImageSets.ImageSet[1]==null){
          return 'assets/images/noimage.png';
        }
        else{
          return value.ImageSets.ImageSet[1].LargeImage.URL;
        }
      }

      if(args=='imagen-carousel3'){
        if(value.ImageSets == null){

          return 'assets/images/noimage.png';
        }
        else if(value.ImageSets.ImageSet[2]==null){
          return 'assets/images/noimage.png';
        }
        else{
          return value.ImageSets.ImageSet[2].LargeImage.URL;
        }
      }

      if(args=='imagen-carousel4'){
        if(value.ImageSets == null){
          return 'assets/images/noimage.png';
        }
        else if(value.ImageSets.ImageSet[3]==null){
          return 'assets/images/noimage.png';
        }
        else{
          return value.ImageSets.ImageSet[3].LargeImage.URL;
        }
      }
    
    
      // IMAGENES CAROUSEL

      if(args=='imagen-carousel2-1'){
        if(value.ImageSets == null){
          return 'assets/images/noimage.png';
        }else if(value.ImageSets.ImageSet[0]==null){
          return value.ImageSets.ImageSet.LargeImage.URL;
        }
        else{
          return value.ImageSets.ImageSet[0].LargeImage.URL;
        }
      }

      if(args=='imagen-carousel2-2'){
        if(value.ImageSets == null){
          return 'assets/images/noimage.png';
        }
        else if(value.ImageSets.ImageSet[1]==null){
          return 'assets/images/noimage.png';
        }
        else{
          return value.ImageSets.ImageSet[1].LargeImage.URL;
        }
      }

      if(args=='imagen-carousel2-3'){
        if(value.ImageSets == null){

          return 'assets/images/noimage.png';
        }
        else if(value.ImageSets.ImageSet[2]==null){
          return 'assets/images/noimage.png';
        }
        else{
          return value.ImageSets.ImageSet[2].LargeImage.URL;
        }
      }

      if(args=='imagen-carousel2-4'){
        if(value.ImageSets == null){
          return 'assets/images/noimage.png';
        }
        else if(value.ImageSets.ImageSet[3]==null){
          return 'assets/images/noimage.png';
        }
        else{
          return value.ImageSets.ImageSet[3].LargeImage.URL;
        }
      }

    if(args=='categoria'){
      if(value ==''){
        return 'En amazon este artículo no tiene categoría';
      }else if(!value){
        return 'En amazon este artículo no tiene categoría';
      }else{
        return value;
      }
    }
    
    // comprueba si el objeto tiene el campo Offers o no lo tiene, si no lo tiene devuelve el campo 0
    // ya que este valor que devuelve se lo paso por parametro a la funcion del componente de comprbar oferta
    // hace que si el parametro es mayor que 0 devuelve true
    if(args=='ofertas'){
      if(value.Offers == null){
        return '0';
      }else{
        return value.Offers.TotalOffers;
      }
    }

  // Esto lo hago para poder saber si existe o no el precio normal, ya que en los arrays devueltos que no 
  // tienen ofertas no existe , entonces al pasarle este valor por parametro a la funcion que comrpueba si
  // hay oferta, para comprarar el precio inicial y el final , en los arrays que el parametro no existe da error
  // y para el programa
  if(args=='precio_normal'){
    if(value.ListPrice==null){
      return 'Este artículo no tiene precio fijo en amazon';
    }else{
      return value.ListPrice.FormattedPrice;
    }
    
  }



if(args=='precio_rebajado'){
  
  if(value.OfferSummary ==null){

    return '0';
    
  }
 if (value.OfferSummary.LowestNewPrice!=null ){
    
    return value.OfferSummary.LowestNewPrice.FormattedPrice;
        
        
  }
   if (value.OfferSummary.LowestNewPrice==null && value.OfferSummary.LowestCollectiblePrice!=null){
    
    return value.OfferSummary.LowestCollectiblePrice.FormattedPrice;
        
  }
   if (value.OfferSummary.LowestNewPrice==null && value.OfferSummary.LowestCollectiblePrice==null){
    
    return '0';
        
  }
  
}

if(args=='precio_rebajado_segundaMano'){
  
  if(value.OfferSummary ==null){

    return 'No hay de segunda mano';
    
  }else if (value.OfferSummary.LowestUsedPrice!=null){

    return value.OfferSummary.LowestUsedPrice.FormattedPrice;
    
  }
  else{
    return 'No hay de segunda mano';
  }
}


if(args=='precio_normal_amount'){
  if(value.ListPrice==null){
    return 'Este artículo no tiene precio fijo en amazon';
  }else{
    return value.ListPrice.Amount;
  }
  
}



if(args=='precio_rebajado_amount'){

if(value.OfferSummary ==null){

  return '0';
  
}
if (value.OfferSummary.LowestNewPrice!=null ){
  
  return value.OfferSummary.LowestNewPrice.Amount;
      
      
}
 if (value.OfferSummary.LowestNewPrice==null && value.OfferSummary.LowestCollectiblePrice!=null){
  
  return value.OfferSummary.LowestCollectiblePrice.Amount;
      
}
 if (value.OfferSummary.LowestNewPrice==null && value.OfferSummary.LowestCollectiblePrice==null){
  
  return '0';
      
}

}

}}


