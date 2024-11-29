/* import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as dayjs from 'dayjs';
import { Between, Repository } from 'typeorm';

@Injectable()
export class EventServices {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async createEvent(eventDto: EventDto, userId: string) {
    const event = new Event();
    event.date = eventDto.date;
    event.eventDescription = eventDto.eventDescription;
    event.eventType = eventDto.eventType;
    event.userId = userId;
    return await this.eventRepository.save(event);
  }

  async getEventsOfUser(userId: string) {
    return await this.eventRepository.findBy({ userId });
  }

  async getEvents() {
    return await this.eventRepository.find();
  }

  async getAcceptedEvents() {
    return await this.eventRepository.findBy({
      eventStatus: EventStatus.ACCEPTED,
    });
  }

  async getEventsInMonth(): Promise<Event[]> {
    return await this.eventRepository.find({
      where: {
        eventStatus: EventStatus.ACCEPTED,
        date: Between(
          dayjs().startOf('month').toDate(),
          dayjs().endOf('month').toDate(),
        ),
      },
      relations: ['user', 'user.projectUser', 'user.projectUser.project'],
    });
  }

  async getEventById(id: string) {
    return await this.eventRepository.findOne({
      where: { id },
      relations: ['user', 'user.projectUser', 'user.projectUser.project'],
    });
  }

  async validateEvent(id: string) {
    const event = await this.getEventById(id);
    event.eventStatus = EventStatus.ACCEPTED;
    return await this.eventRepository.save(event);
  }

  async declineEvent(id: string) {
    const event = await this.getEventById(id);
    event.eventStatus = EventStatus.DECLINED;
    return await this.eventRepository.save(event);
  }
}
 */
