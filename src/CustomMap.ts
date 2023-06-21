// instrucctions to all other class on how can they be an argument to the method addMarker
interface Mappable{
  location: {
    lat: number;
    lng: number
  }
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string){
    this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: 2,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: 'Hello!'
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}