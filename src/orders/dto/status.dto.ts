import { IsEnum, IsOptional } from "class-validator";
import { OrderStatus, OrderStatusList } from "../enums/order.enum";

export class StatusDto {
    
    @IsOptional()
    @IsEnum(OrderStatusList, {
        message: `Possible status values are ${ OrderStatusList }`
    })
    status: OrderStatus

}