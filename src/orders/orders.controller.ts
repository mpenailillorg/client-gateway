import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { ClientProxy } from '@nestjs/microservices';
import { ORDERS_SERVICE } from 'src/config/services';

@Controller('orders')
export class OrdersController {
  constructor( @Inject(ORDERS_SERVICE) private readonly ordersClient: ClientProxy) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersClient.send('createOrder', createOrderDto);
  }

  @Get()
  findAll() {
    return this.ordersClient.send('findAllOrders', {})
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.ordersClient.send('findOneOrder', {id: +id});
  }

}
