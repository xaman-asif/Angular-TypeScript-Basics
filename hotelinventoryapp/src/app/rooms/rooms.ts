export interface Room {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export interface RoomList {
  roomNumber?: string;
  roomType: string;
  roomPrice: number;
  amenities: string;
  checkInTime: Date;
  rating: number;
}
